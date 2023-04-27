#!/usr/bin/python3
from brownie import TFSCoin, TFSRewards, accounts, config, convert
dev = accounts.add(config["wallets"]["from_key"])
def main():

    TFSCoin.deploy({"from": dev})
    Coin = TFSCoin[len(TFSCoin) - 1]
    TFSRewards.deploy(TFSCoin[len(TFSCoin) - 1], {"from": dev})
    Rewards = TFSRewards[len(TFSRewards) - 1]

    #Adding both contracts and admin wallet address as an admin 
    Rewards.addAdmin(Coin, {"from" : dev})
    Coin.addAdmin(Rewards, {"from" : dev})
    Rewards.addAdmin(dev, {"from" : dev})
    Coin.addAdmin(dev, {"from" : dev})

    add_inital_awards()
    Rewards.awardCoins(dev, 30 * (10 **18), 1)
    return 0

def add_inital_rewards():
    rewards = [i for i in range(3)]
    count = [30 for i in range(3)]

def add_inital_awards():
    Rewards = TFSRewards[len(TFSRewards) - 1]
    awards = [i for i in range(3)]
    
    for award in awards:
        if(Rewards.availableAwards(award) == False):
            Rewards.addAward(award, {"from" : dev})
