const getRewardInfoDb = async (id) => {
    return new Promise((resolve, reject) => {

        const qry = `SELECT r.*, rd.*
                FROM reward r
                JOIN reward_desc rd ON r.reward_id = rd.reward_id
                WHERE r.reward_id = ${id};`

        pool.query(qry, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}

module.exports = {
    getRewardInfoDb
}


