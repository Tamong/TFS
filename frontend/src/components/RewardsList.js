import { useState, useEffect } from 'react';

const RewardsList = ({ userInfo }) => {
  const [rewards, setRewards] = useState([]);
  const [selectedRewards, setSelectedRewards] = useState([]);

  useEffect(() => {
    const fetchRewards = async () => {
      const response = await fetch('http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com:3000/api/rewards/');
      const data = await response.json();

      const groupedRewards = data.reduce((acc, reward) => {
        if (!acc[reward.reward_id]) {
          acc[reward.reward_id] = {
            ...reward,
            descriptions: [],
          };
        }

        acc[reward.reward_id].descriptions.push({
          desc_id: reward.desc_id,
          desc_type: reward.desc_type,
          desc_value: reward.desc_value,
          inventory: reward.inventory,
        });

        return acc;
      }, {});

      setRewards(Object.values(groupedRewards));
    };

    fetchRewards();
  }, []);

  const handleCheckboxChange = (e, rewardId, descId) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedRewards([...selectedRewards, { reward_id: rewardId, desc_id: descId }]);
    } else {
      setSelectedRewards(selectedRewards.filter(reward => !(reward.reward_id === rewardId && reward.desc_id === descId)));
    }
  };

  const claimRewards = async () => {
    try {
      const response = await fetch('http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com:3000/api/claim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ee_id: userInfo.ee_ID,
          rewards: selectedRewards,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to claim rewards');
      }

      const data = await response.json();
      console.log('Claim rewards response:', data);

      // You can update the state or show a message based on the response
    } catch (error) {
      console.error('Error claiming rewards:', error);
      // You can show an error message or update the state
    }
  };

  return (
    <div>
      <h2>Claim Rewards</h2>
      <div>
        {rewards.map((reward) => (
          <div key={reward.reward_id}>
            <h3>{reward.title}</h3>
            <p>Price: {reward.coin_price} TFS Coin</p>
            {reward.descriptions.map((desc) => (
              <label className="reward-item" key={desc.desc_id}>
                <input
                  className="reward-checkbox"
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, reward.reward_id, desc.desc_id)}
                />
                <span>
                  {desc.desc_type}: {desc.desc_value} ({desc.inventory} in stock)
                </span>
              </label>
            ))}
          </div>
        ))}
      </div>
      <button className="submit" onClick={claimRewards}>Claim Selected Rewards</button>
      <div className="Filler" />
    </div>
  );
};

export default RewardsList;
