#!/usr/bin/python3
from brownie import TFSCoin, TFSRewards, accounts, network, config
from typing import List

#Retrieves the contract addresses of the most recently deployed contracts
dev = accounts.add(config["wallets"]["from_key"])
def main():
    coin = TFSCoin[len(TFSCoin) - 1]
    print(len(TFSRewards))
    rewards = TFSRewards[len(TFSRewards) - 1]
    print(rewards.isPaused())
    rewards.addAward(award, {"from" : dev})
    return 

def mint(coinContract, user_addresses : str, amount : int):
    '''
    Mints amount to each user in @user_addresses
    '''    
    for address in user_addresses:
        coinContract.mint(address, amount * (10 ** 18), {"from" : dev})

def pause_rewards(rewardsContract):
    rewardsContract.pauseRewards(True, {"from" : dev})

def resume_rewards(rewardsContract):
    rewardsContract.pauseRewards(False, {"from" : dev})

def add_awards(rewardsContract, awards : List[int]):
    '''
    Adds awards for employees to receive
    '''    
    for award in awards:
        if(rewardsContract.availableAwards(award) == False):
            rewardsContract.addAward(award, {"from" : dev})

def remove_awards(rewardsContract, awards : List[int]):
    '''
    Removes awards for employees to receive
    '''    
    for award in awards:
        if(rewardsContract.availableAwards(award) == True):
            rewardsContract.removeAward(award, {"from" : dev})

def add_rewards(rewardsContract, rewards : List[int]):
    '''
    Adds rewards for employees to claim
    '''    
    for reward in rewards:
        if(rewardsContract.availableRewards(reward) == False):
            rewardsContract.addReward(reward, {"from" : dev})

def remove_rewards(rewardsContract, rewards : List[int]):
    '''
    Removes rewards for employees to claim
    '''    
    for reward in rewards:
        if(rewardsContract.availableRewards(reward) == True):
            rewardsContract.addReward(reward, {"from" : dev})