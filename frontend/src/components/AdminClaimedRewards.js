import React, { useState, useEffect } from "react";

const AdminModifyRewards = ({ userInfo, token }) => {
  const [claimedRewards, setClaimedRewards] = useState([]);
  const [rewardData, setRewardData] = useState([]);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("http://localhost:3000/api/claims", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setClaimedRewards(data);
      });
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await Promise.all(
        claimedRewards.map(async (reward) => {
          const username = await getUsername(reward.ee_id);
          const { rewardName, rewardImage } = await getRewardNameAndImage(
            reward.reward_id
          );
          const rewardDescription = await getRewardDescriptions(
            reward.reward_id,
            reward.desc_ids
          );

          console.log(rewardImage);
          return {
            ...reward,
            username,
            rewardName,
            rewardImage,
            rewardDescription,
          };
        })
      );
      setRewardData(fetchedData);
    };

    if (claimedRewards.length > 0) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, claimedRewards]);

  const getUsername = async (ee_id) => {
    const response = await fetch(`http://localhost:3000/api/user/${ee_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    return data.username;
  };

  const getRewardNameAndImage = async (rewardId) => {
    const response = await fetch(
      `http://localhost:3000/api/rewards/${rewardId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return { rewardName: data.title, rewardImage: data.img_url };
  };

  const getRewardDescriptions = async (rewardId, descIds) => {
    if (!descIds) {
      return "";
    }
    const descIdArray = descIds.split(",").map(Number);

    const response = await fetch(
      `http://localhost:3000/api/rewards/${rewardId}/descriptions/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await response.json();

    const filteredDescriptions = data.color
      .concat(data.size)
      .filter((desc) => descIdArray.includes(desc.desc_id))
      .map((desc) => `${desc.desc_type}: ${desc.desc_value}`);

    return filteredDescriptions.join(", ");
  };

  return (
    <div>
      <h2>Claimed Rewards</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction Hash</th>
            <th>Employee</th>
            <th>Reward Name</th>
            <th>Reward Descriptions</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {rewardData.map((reward) => (
            <tr key={reward.txn_id}>
              <td>
                <a
                  href={`https://sepolia.etherscan.io/tx/${reward.txn_id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {".... " + reward.txn_id.slice(-12)}
                </a>
              </td>
              <td>{reward.username}</td>
              <td>{reward.rewardName}</td>
              <td>
                {reward.rewardDescription.split(", ").map((desc, index) => (
                  <React.Fragment key={index}>
                    {desc}
                    {index <
                      reward.rewardDescription.split(", ").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </td>
              <td>
                <img src={reward.rewardImage} alt={reward.rewardName} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminModifyRewards;
