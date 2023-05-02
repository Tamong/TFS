#!/usr/bin/python3
from brownie import TFSCoin, TFSRewards, accounts, config, convert
from scripts.tfs_scripts import resume_rewards
def main():
    dev = accounts.add(config["wallets"]["from_key"])
    TFSCoin.deploy({"from": dev})
    Coin = TFSCoin[len(TFSCoin) - 1]
    TFSRewards.deploy(TFSCoin[len(TFSCoin) - 1], {"from": dev})
    Rewards = TFSRewards[len(TFSRewards) - 1]

    mintAll()

    ### Uncomment to allow reward claiming when deployed
    resume_rewards(Rewards)

    #Adding both contracts and admin wallet address as an admin 
    Rewards.addAdmin(Coin, {"from" : dev})
    Coin.addAdmin(Rewards, {"from" : dev})
    Rewards.addAdmin(dev, {"from" : dev})
    Coin.addAdmin(dev, {"from" : dev})

    return 0
