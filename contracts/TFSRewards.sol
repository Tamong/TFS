pragma solidity 0.8.19;

contract TFSRewards {

    mapping(uint256 => uint256) public rewardIDToRewardCount;

    function claimReward(uint256 rewardID) public {
        rewardIDToRewardCount[rewardID] = rewardIDToRewardCount[rewardID] - 1;
    }
    
    function getRewardCount(uint256 rewardID) public returns (uint256) {
        return rewardIDToRewardCount[rewardID];
    }
}