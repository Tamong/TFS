const getRewardInfoDb = async (rewardId) => {
    console.log("getRewardInfoDb hit!");
    return new Promise((resolve, reject) => {

        qry = `SELECT r.*, rd.*
                FROM reward r
                JOIN reward_desc rd ON r.reward_id = rd.reward_id
                WHERE r.reward_id = ${rewardId};`

        connection.query(qry, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}

module.exports = {
    getRewardInfoDb
}


