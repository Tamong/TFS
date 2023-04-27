# Blockchain Management

Management of both the rewards smart contract and TFS coin smart contract can be facilitated using a python package called [brownie](https://eth-brownie.readthedocs.io/en/stable/install.html)

**DO NOT MODIFY ANY DIRECTORY NAMES!**

## Brownie Set Up
Modify the values in the .env file with the admin wallet private key and new infura project ID.

Once brownie has been installed, run `brownie compile` and the ABI's for the contracts will be generated in `build/contracts`.

Enter `brownie networks add Ethereum Sepolia host=https://sepolia.infura.io/v3/<API-KEY> chainid=11155111` to add the Sepolia testnet. 

## Deploying Contracts
New scripts can be created for deployment, but a script has been provided to deploy and configure the contracts on the Sepolia testnet.

Enter `brownie run scripts/deploy.py --network Sepolia`.

Rewards will be paused by default, to enable them, run `brownie run scripts/tfs_scripts.py resume_rewards --network Sepolia`

The output in the terminal will show the transaction hash, gas used, and contract addresses which can be noted for later use.

## Additional Bronwie Scripts
All additional scripts for management/configuration have been put in `scripts/tfs_scripts.py`.

Scripts can be ran using `brownie run scripts/tfs_scripts.py <method_name> <param1> <param2> --network Sepolia`

Additionally, brownie will by default call the `main()` method, so addtional methods can be created and called from there by just running the whole script

## Genearting ABIs
Anytime a new deployment has been made, updated ABIs can be found in `build/`. These changes will need to be reflected in the backend by copying the ABIs to `TFS/backend/contract`







