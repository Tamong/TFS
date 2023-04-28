import { useState, useEffect } from "react";

const AdminModifyRewards = ({ userInfo, token }) => {
  const [groupedRewards, setGroupedRewards] = useState([]);
  const [selected, setSelected] = useState("");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [newDescription, setNewDescription] = useState({
    type: "",
    value: "",
  });

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

    setGroupedRewards(groupRewards(allRewards));
  };

  useEffect(() => {
    if (!token) {
      return;
    }

    fetchRewards();
  }, [token]);

  const groupRewards = (rewards) => {
    const grouped = {};

    rewards.forEach((reward) => {
      if (!grouped[reward.reward_id]) {
        grouped[reward.reward_id] = {
          reward_id: reward.reward_id,
          title: reward.title,
          coin_price: reward.coin_price,
          inventory: reward.inventory,
          img_url: reward.img_url,
          descriptions: [],
        };
      }

      const existingDescription = grouped[reward.reward_id].descriptions.find(
        (desc) => desc.type === reward.desc_type
      );

      if (existingDescription) {
        existingDescription.values.push(reward.desc_value);
      } else {
        grouped[reward.reward_id].descriptions.push({
          type: reward.desc_type,
          values: [reward.desc_value],
        });
      }
    });

    return Object.values(grouped);
  };

  const handleNewDescriptionChange = (e) => {
    const { name, value } = e.target;
    setNewDescription((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNewDescriptionSubmit = async (e) => {
    e.preventDefault();
    if (!selected) {
      alert("Please select a reward first");
      return;
    }

    // Submit the new description type/value combination to the API
    const response = await fetch("http://localhost:3000/api/rewards/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        reward_id: selected,
        desc_type: newDescription.type,
        desc_value: newDescription.value,
      }),
    });

    const data = await response.json();
    if (data) {
      // Fetch updated rewards data
      fetchRewards();
      // Clear the new description inputs
      setNewDescription({ type: "", value: "" });
    } else {
      alert("Error adding new description");
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
      <table>
        <thead>
          <tr>
            <th>Reward ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Inventory</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {groupedRewards.map((reward) => (
            <>
              <tr
                key={reward.reward_id}
                className={selected === reward.reward_id ? "selected-row" : ""}
                onClick={() => {
                  setSelected(reward.reward_id);
                  setOpenAccordion(
                    openAccordion === reward.reward_id ? null : reward.reward_id
                  );
                }}
              >
                <td>{reward.reward_id}</td>
                <td>{reward.title}</td>
                <td>{reward.coin_price}</td>
                <td>{reward.inventory}</td>
                <td>
                  <img src={reward.img_url} alt={reward.title} />
                </td>
              </tr>
              {openAccordion === reward.reward_id && (
                <tr>
                  <td colSpan="5">
                    {reward.descriptions.map((description, index) => (
                      <div key={index}>
                        <strong>{description.type}:</strong>
                        <ul>
                          {description.values.map((value, i) => (
                            <li key={value}>{value}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <form
                      className="ResetCSS"
                      onSubmit={handleNewDescriptionSubmit}
                    >
                      <h3>Add new description</h3>
                      <label htmlFor={`descType-${reward.reward_id}`}>
                        Description Type:
                      </label>
                      <input
                        type="text"
                        id={`descType-${reward.reward_id}`}
                        name="type"
                        value={newDescription.type}
                        onChange={handleNewDescriptionChange}
                      />
                      <br />
                      <label htmlFor={`descValue-${reward.reward_id}`}>
                        Description Value:
                      </label>
                      <input
                        type="text"
                        id={`descValue-${reward.reward_id}`}
                        name="value"
                        value={newDescription.value}
                        onChange={handleNewDescriptionChange}
                      />
                      <button type="submit">Add Description</button>
                    </form>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminModifyRewards;
