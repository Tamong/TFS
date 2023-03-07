pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./TFSCoin.sol";

contract TFSRewards {

    address private admin; //possibly change to mapping of admins
    TFSCoin coinContract;

    constructor(address _coinContract) {
        coinContract = TFSCoin(_coinContract);
    }

    bool rewardsPaused;

    mapping(uint256 => uint256) public rewardIDToRewardCount;
    mapping(uint256 => uint256) public rewardIDToRewardPrice;

    event rewardClaimed(address claimee);
    event rewardsHalted(address who);

    modifier onlyAdmin {
        require(msg.sender == admin);
        _;
    }

    function claimReward(uint256 rewardID, uint256 coins) public {
        require(rewardIDToRewardCount[rewardID] > 0);
        require(!rewardsPaused);
        require(coinContract.transferFrom(msg.sender, address(this), coins));
        rewardIDToRewardCount[rewardID] = rewardIDToRewardCount[rewardID] - 1;
        emit rewardClaimed(msg.sender);
    }
    
    function addPrize(uint256 rewardID, uint256 rewardCount) onlyAdmin public {
        rewardIDToRewardCount[rewardID] = rewardCount;
    }

    function removePrize(uint256 rewardID) onlyAdmin public {
        rewardIDToRewardCount[rewardID] = 0;
    }

    function pauseRewards(bool _rewardsPaused) public {
        rewardsPaused = _rewardsPaused;
        emit rewardsHalted(msg.sender);
    }

}