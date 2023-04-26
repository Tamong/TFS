import { useState, useEffect } from "react";

const AdminModifyRewards = ({ userInfo, token }) => {
  const [allRewards, setAllRewards] = useState([]);
  const [displayType, setDisplayType] = useState("All Rewards");

  const fetchRewards = async () => {
    const response = await fetch("http://localhost:3000/api/rewards/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();

    const allRewards = data[0].map((reward) => {
      if (reward.processor_msg === null) {
        return { ...reward, processor_msg: " " };
      } else {
        return reward;
      }
    });

    setAllRewards(allRewards);
  };

  useEffect(() => {
    if (!token) {
      return;
    }

    fetchRewards();
  }, [token]);

  const handleButtonClick = (bountyType) => {
    if (bountyType === "View") {
      setDisplayType("View");
    } else if (bountyType === "Add") {
      setDisplayType("Add");
    } else if (bountyType === "Edit") {
      setDisplayType("Edit");
    } else if (bountyType === "Delete") {
      setDisplayType("Delete");
    }
  };

  const handleSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(userInfo.ee_ID);
    const response = await fetch("http://localhost:3000/api/reward/process/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        processor_ee_ID: userInfo.ee_ID,
      }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h2>Rewards</h2>
      <button onClick={() => handleButtonClick("View")}>View Rewards</button>
      <button onClick={() => handleButtonClick("Add")}>Add Rewards</button>
      <button onClick={() => handleButtonClick("Edit")}>Edit Rewards</button>
      <button onClick={() => handleButtonClick("Delete")}>
        Delete Rewards
      </button>
      <table>
        <thead>
          <tr>
            <th>Description ID</th>
            <th>Reward ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Inventory</th>
            <th>Description Type</th>
            <th>Description Value</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {allRewards.map((reward) => (
            <tr key={reward.desc_id}>
              <td>{reward.desc_id}</td>
              <td>{reward.reward_id}</td>
              <td>{reward.title}</td>
              <td>{reward.coin_price}</td>
              <td>{reward.inventory}</td>
              <td>{reward.desc_type}</td>
              <td>{reward.desc_value}</td>
              <td>
                <img src={reward.img_url} alt={reward.title} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminModifyRewards;
