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

def mintAll():
    dev = accounts.add(config["wallets"]["from_key"])
    tt = TFSCoin[len(TFSCoin) - 1]
    #tt.get_publish_source()
    trans = tt.mint(dev, 30 * (10 **18), {"from" : dev})
    tt.mint('0xD52C128186A4028B8fa3E68a5adEa2E274072529', 30 * (10 **18), {"from" : dev})
    tt.mint('0x245cd60167BC2dD40dce94Ac7e08de15b3c3D6aE', 30 * (10 **18), {"from" : dev})
    tt.mint('0xb5fee1AB82dAdEa48e16Dc9C220A2dB144bb3834', 30 * (10 **18), {"from" : dev})
    tt.mint('0x6961b6Cb9a73204fbE8C4E3CAd1E1Bcb7C83f75c', 30 * (10 **18), {"from" : dev})

    return 0
