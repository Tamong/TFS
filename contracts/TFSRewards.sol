pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./TFSCoin.sol";

contract TFSRewards {

    mapping(address => bool) public isAdmin;
    TFSCoin coinContract;

    constructor(address _coinContract) {
        coinContract = TFSCoin(_coinContract);
        isAdmin[msg.sender] = true;
        rewardIDToRewardCount[0] = 100;
        rewardIDToRewardPrice[0] = 15;
    }

    bool rewardsPaused;

    mapping(uint256 => uint256) public rewardIDToRewardCount;
    mapping(uint256 => uint256) public rewardIDToRewardPrice;

    event rewardClaimed(address claimee);
    event rewardsHalted(address who);

    modifier onlyAdmin {
        require(isAdmin[msg.sender], "You are not an admin!");
        _;
    }

    function claimReward(address employeeAddress, uint256 rewardID) public {
        require(!rewardsPaused, "Rewards are currently paused");
        require(rewardIDToRewardCount[rewardID] > 0);
        require(coinContract.burn(employeeAddress, rewardIDToRewardPrice[rewardID]), "Not enough TFS Coin for reward");
        rewardIDToRewardCount[rewardID] = rewardIDToRewardCount[rewardID] - 1;
        emit rewardClaimed(msg.sender);
    }
    
    function addReward(uint256 rewardID, uint256 rewardCount) onlyAdmin public {
        rewardIDToRewardCount[rewardID] = rewardCount;
    }

    function removeReward(uint256 rewardID) onlyAdmin public {
        rewardIDToRewardCount[rewardID] = 0;
    }

    function pauseRewards(bool _rewardsPaused) onlyAdmin public {
        rewardsPaused = _rewardsPaused;
        emit rewardsHalted(msg.sender);
    }

    function addAdmin(address newAdmin) onlyAdmin public {
        isAdmin[newAdmin] = true;
    }

    function removeAdmin(address newAdmin) onlyAdmin public {
        isAdmin[newAdmin] = false;
    }

}