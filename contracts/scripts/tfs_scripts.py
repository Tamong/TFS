#!/usr/bin/python3
from brownie import TFSCoin, TFSRewards, accounts, network, config

#Retrieves the contract addresses of the most recently deployed contracts
coin = TFSCoin[len(TFSCoin) - 1]
rewards = TFSRewards[len(TFSRewards) - 1]
def main():
    dev = accounts.add(config["wallets"]["from_key"])
    return 

def mint(user_addresses, amount):
    '''
    Mints amount to each user in @user_addresses
    '''    
    for address in user_addresses:
        coin.mint(address, amount * (10 ** 18), {"from" : dev})


def pause_rewards():
    rewards.pauseRewards(True, {"from" : dev})

def resume_rewards():
    rewards.pauseRewards(False, {"from" : dev})

def add_awards(awards : list[int]):
    '''
    Adds awards for employees to receive
    '''    
    for awards in awards:
        if(rr.availableAwards(award) == False):
            rewards.addAward(award, {"from" : dev})

def remove_awards(awards : list[int]):
    '''
    Removes awards for employees to receive
    '''    
    for awards in awards:
        if(rr.availableAwards(award) == True):
            rewards.removeAward(award, {"from" : dev})

def add_rewards(rewards : list[int]):
    '''
    Adds rewards for employees to claim
    '''    
    for awards in awards:
        if(rr.availableAwards(award) == False):
            rewards.addAward(award, {"from" : dev})

def remove_awards(rewards : list[int]):
    '''
    Removes rewards for employees to claim
    '''    
    for awards in awards:
        if(rr.availableAwards(award) == False):
            rewards.addAward(award, {"from" : dev})