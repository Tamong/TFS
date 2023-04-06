const getRewardInfoDb = async (rewardId) => {
    return new Promise((resolve, reject) => {

        const qry = `SELECT r.*, rd.*
                FROM reward r
                JOIN reward_desc rd ON r.reward_id = rd.reward_id
                WHERE r.reward_id = ?;`

        pool.query(qry, [rewardId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}

module.exports = {
    getRewardInfoDb
}


