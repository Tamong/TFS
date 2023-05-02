pragma solidity 0.8.19;

import "@openzeppelin/contracts/utils/Strings.sol";
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
    mapping(uint256 => bool) public availableAwards;

    event rewardClaimed(address claimee, uint256 rewardID);
    event rewardsHalted(address who);
    event awardedCoins(address who, uint256 awardID);

    modifier onlyAdmin {
        require(isAdmin[msg.sender], string.concat("TFSRewards: This is not an admin address", Strings.toHexString(uint256(uint160(msg.sender)), 20)));
        _;
    }

    function claimReward(address employeeAddress, uint256 rewardID) onlyAdmin public {
        require(!rewardsPaused, "Rewards are currently paused");
        require(rewardIDToRewardCount[rewardID] > 0);
        require(coinContract.burn(employeeAddress, rewardIDToRewardPrice[rewardID]), "Not enough TFS Coin for reward");
        rewardIDToRewardCount[rewardID] = rewardIDToRewardCount[rewardID] - 1;
        emit rewardClaimed(employeeAddress, rewardID);
    }

    function awardCoins(address employeeAddress, uint256 coins, uint256 awardID) public {
        require(availableAwards[awardID], "TFSRewards: This is not a valid award at the moment");
        require(coinContract.mint(employeeAddress, coins));
        emit awardedCoins(employeeAddress, awardID);
    }
    
    function addAward(uint256 awardID) onlyAdmin public {
        availableAwards[awardID] = true;
    }

    function removeAward(uint256 awardID) onlyAdmin public {
        availableAwards[awardID] = false;
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