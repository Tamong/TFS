const userDb = require('../db/users.db')
const blockchain = require('../contract/blockchain')


const transferTokensUsernames = async (fromUsername, toUsername, amount) => {
    try{
        const from = await userDb.getUserByUsernameDb(fromUsername);
        if(from.length == 1){
            const to = await userDb.getUserByUsernameDb(toUsername);
            if(to.length == 1){
                //From exists, to exists. Get wallet addresses
                const fromAddr = from[0].wallet_address;
                const toAddr = to[0].wallet_address;
                const fromPrivate = from[0].private_key;

                //Get balances
                const fromBal = await blockchain.getWalletBalance(fromAddr);
                const toBal = await blockchain.getWalletBalance(toAddr);

                //NOTE: Amount may return additional trailing 0's
                if(amount <= fromBal){
                    //Transfer tokens
                    //const remaining = blockchain.transferTokens(toAddr, fromAddr, amount)
                    await blockchain.transferTokensFromUser(fromAddr, toAddr, amount);
                    //Return updated balances for to and from
                    return {toBal: Number(toBal) + Number(amount), fromBal: Number(fromBal) - Number(amount)};
                }
                else {
                    return { error: "Insufficient Balance" };
                }
            }
            else {
                return { error: "Invalid Username" };
            }
        }
        return {toBal: -1, fromBal: -1};
    }catch(e){
        throw Error(e);
    }
}

module.exports = {
    transferTokensUsernames
}