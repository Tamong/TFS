pragma solidity 0.8.19;

import "@openzeppelin/contracts/utils/Strings.sol";
import "./TFSCoin.sol";

contract TFSRewards {

    mapping(address => bool) public isAdmin;
    TFSCoin coinContract;

    constructor(address _coinContract) {
        coinContract = TFSCoin(_coinContract);
        isAdmin[msg.sender] = true;
        rewardsPaused = true;
        availableAwards[0] = true;
        availableAwards[1] = true;
        availableAwards[2] = true;
        availableRewards[0] = true;
        availableRewards[1] = true;
        availableRewards[2] = true;
    }

    bool rewardsPaused;

    mapping(uint256 => bool) public availableAwards;
    mapping(uint256 => bool) public availableRewards;

    event rewardClaimed(address employeeAddress, uint256 rewardID);
    event awardedCoins(address employeAddress, uint256 awardID);
    event rewardsHalted(address adminAddress);

    modifier onlyAdmin {
        require(isAdmin[msg.sender], string.concat("TFSRewards: This is not an admin address: ", Strings.toHexString(uint256(uint160(msg.sender)), 20)));
        _;
    }

    function claimReward(address employeeAddress, uint256 rewardID, uint256 rewardPrice) onlyAdmin public {
        require(!rewardsPaused, "Rewards are currently paused");
        require(availableRewards[rewardID], "TFSRewards: This is not a valid reward at the moment");
        require(coinContract.burn(employeeAddress, rewardPrice), "Not enough TFS Coin for reward");
        emit rewardClaimed(employeeAddress, rewardID);
    }

    function awardCoins(address employeeAddress, uint256 coins, uint256 awardID) onlyAdmin public {
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

    function addReward(uint256 rewardID) onlyAdmin public {
        availableRewards[rewardID] = true;
    }

    function removeReward(uint256 rewardID) onlyAdmin public {
        availableRewards[rewardID] = false;
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