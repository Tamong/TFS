import { useState, useEffect } from "react";

const RewardsList = ({ userInfo, token }) => {
  const [rewards, setRewards] = useState([]);
  const [selectedReward, setSelectedReward] = useState(null);
  const [selectedDescIds, setSelectedDescIds] = useState(null);

  const [errorMessage, setErrorMessage] = useState({});
  const [txnStatus, setTxnStatus] = useState({});

  useEffect(() => {
    if (!token) {
      return;
    }
    const fetchRewards = async () => {
      const response = await fetch("http://localhost:3000/api/rewards/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const data = await response.json();

      const newData = await Promise.all(
        data.map(async (element) => {
          const res = await fetch(
            `http://localhost:3000/api/rewards/${element.reward_id}/descriptions`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
            }
          );
          const descriptions = await res.json();
          return { ...element, descriptions };
        })
      );

      setRewards(newData);
    };

    fetchRewards();
  }, [token]);

  const handleSelectChange = (e, rewardId, descType) => {
    setSelectedReward(rewardId);
    setSelectedDescIds((prevSelectedDescIds) => {
      const updatedSelectedDescIds = {
        ...prevSelectedDescIds,
        [descType]: parseInt(e.target.value),
      };
      return updatedSelectedDescIds;
    });
  };

  function claimReward(event, rewardId) {
    event.preventDefault();

    setErrorMessage({ ...errorMessage, [rewardId]: "" });

    setTxnStatus({ ...txnStatus, [rewardId]: "Claim Pending..." });

    //ec2-3-137-214-39.us-east-2.compute.amazonaws.com
    fetch(`http://localhost:3000/api/rewards/claim/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        ee_id: userInfo.ee_ID,
        reward_id: selectedReward,
        desc_ids: Object.values(selectedDescIds),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Claim response:", data);
        if (data.error === "Insufficient balance") {
          setTxnStatus({ ...txnStatus, [rewardId]: "" });
          setErrorMessage({
            ...errorMessage,
            [rewardId]: "Insufficient Balance",
          });
        } else if (data.error === "Reward out of stock") {
          setTxnStatus({ ...txnStatus, [rewardId]: "" });
          setErrorMessage({
            ...errorMessage,
            [rewardId]: "Reward is currently Out of Stock",
          });
        } else {
          setTxnStatus({
            ...txnStatus,
            [rewardId]: "Claim Successful! An admin will contact you shortly.",
          });
        }
      })
      .catch((error) => {
        setErrorMessage({
          ...errorMessage,
          [rewardId]: "Server Error! Try again later.",
        });
        setTxnStatus({ ...txnStatus, [rewardId]: "" });
      });
  }

  return (
    <div>
      <h2>Claim Rewards</h2>
      <div className="rewards-container">
        {rewards.map((reward) => {
          const groupedDescriptions = reward.descriptions;

          return (
            <div key={reward.reward_id} className="reward">
              <h3>{reward.title}</h3>
              <img
                src={
                  reward.img_url
                    ? reward.img_url
                    : "https://www.plslwd.org/wp-content/plugins/lightbox/images/No-image-found.jpg"
                }
                alt={reward.title}
              />
              <p>Price: {reward.coin_price} TFS Coin</p>
              {Object.keys(groupedDescriptions).map((descType) => (
                <div key={descType}>
                  <label>{descType}:</label>
                  <select
                    onChange={(e) =>
                      handleSelectChange(e, reward.reward_id, descType)
                    }
                    value={
                      selectedReward === reward.reward_id
                        ? selectedDescIds?.[descType]
                        : ""
                    }
                  >
                    <option value="" disabled>
                      Choose {descType}
                    </option>
                    {groupedDescriptions[descType].map((desc) => (
                      <option key={desc.desc_id} value={desc.desc_id}>
                        {desc.desc_value}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
              <button
                className="submit"
                disabled={
                  !selectedDescIds ||
                  !(selectedReward === reward.reward_id) ||
                  Object.keys(groupedDescriptions).length !==
                    Object.keys(selectedDescIds).length
                }
                onClick={(e) => claimReward(e, reward.reward_id)}
              >
                Claim
              </button>

              <div className="txnStatus">
                {txnStatus[reward.reward_id] && (
                  <p>{txnStatus[reward.reward_id]}</p>
                )}
              </div>
              <div className="error">
                {errorMessage[reward.reward_id] && (
                  <p>{errorMessage[reward.reward_id]}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RewardsList;
