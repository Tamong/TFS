import React, { useState, useEffect } from "react";

const AdminModifyRewards = ({ userInfo, token }) => {
  const [groupedRewards, setGroupedRewards] = useState([]);
  const [selected, setSelected] = useState("");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [newDescription, setNewDescription] = useState({
    type: "",
    value: "",
  });
  const [newReward, setNewReward] = useState({
    title: "",
    price: "",
    inventory: "",
    imageUrl: "",
    desc_type: "",
    desc_value: "",
  });

  const handleNewRewardChange = (e) => {
    const { name, value } = e.target;
    setNewReward((prevReward) => ({
      ...prevReward,
      [name]: value,
    }));
  };

  const handleCreateRewardSubmit = async (e) => {
    e.preventDefault();

    // Handle creating the new reward using your API here.
    // You can use the newReward object to access the new reward information.
    const response = await fetch(
      "http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com:3000/api/rewards/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          title: newReward.title,
          coin_price: newReward.price,
          inventory: newReward.inventory,
          img_url: newReward.imageUrl,
          descriptions: [
            {
              desc_type: newReward.desc_type,
              desc_value: newReward.desc_value,
            },
          ],
        }),
      }
    );
    const data = await response.json();

    if (data) {
      // Fetch updated rewards data
      fetchRewards();
      // Clear the new reward inputs

      alert("Reward created successfully");
    }
    // Handle creating the new reward description using your API here.

    // Reset the form fields after the new reward is created.
    setNewReward({
      title: "",
      price: "",
      inventory: "",
      imageUrl: "",
      desc_type: "",
      desc_value: "",
    });
  };

  const fetchRewards = async () => {
    const response = await fetch(
      "http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com:3000/api/rewards/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await response.json();

    const newData = await Promise.all(
      data.map(async (element) => {
        const res = await fetch(
          `http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com:3000/api/rewards/${element.reward_id}/descriptions`,
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

    setGroupedRewards(newData);
  };

  useEffect(() => {
    if (!token) {
      return;
    }

    fetchRewards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

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

    console.log(selected);
    console.log(newDescription);

    // Submit the new description type/value combination to the API
    const response = await fetch(
      `http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com:3000/api/rewards/${selected}/descriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          desc_type: newDescription.type,
          desc_value: newDescription.value,
        }),
      }
    );

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
            <React.Fragment key={reward.reward_id}>
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
                  <img
                    src={
                      reward.img_url
                        ? reward.img_url
                        : "https://www.plslwd.org/wp-content/plugins/lightbox/images/No-image-found.jpg"
                    }
                    alt={reward.title}
                  />
                </td>
              </tr>
              {openAccordion === reward.reward_id && (
                <tr>
                  <td colSpan="5">
                    {Object.entries(reward.descriptions).map(
                      ([descType, descValues], index) => (
                        <div key={index}>
                          <strong>{descType}:</strong>
                          <ul>
                            {descValues.map((descValue, i) => (
                              <li key={descValue.desc_id}>
                                {descValue.desc_value}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
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
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="create-new-reward ResetCSS">
        <h3>Create New Reward</h3>
        <form onSubmit={handleCreateRewardSubmit}>
          <label htmlFor="newTitle">Title:</label>
          <input
            type="text"
            id="newTitle"
            name="title"
            value={newReward.title}
            onChange={handleNewRewardChange}
          />
          <br />
          <label htmlFor="newPrice">Price:</label>
          <input
            type="number"
            id="newPrice"
            name="price"
            value={newReward.price}
            onChange={handleNewRewardChange}
          />
          <br />
          <label htmlFor="newInventory">Inventory:</label>
          <input
            type="number"
            id="newInventory"
            name="inventory"
            value={newReward.inventory}
            onChange={handleNewRewardChange}
          />
          <br />
          <label htmlFor="newImageUrl">Image URL:</label>
          <input
            type="url"
            id="newImageUrl"
            name="imageUrl"
            value={newReward.imageUrl}
            onChange={handleNewRewardChange}
          />
          <br />
          <label htmlFor="newDescType">Description Type: </label>
          <input
            type="text"
            id="newDescType"
            name="desc_type"
            value={newReward.desc_type}
            onChange={handleNewRewardChange}
          />
          <br />
          <label htmlFor="newDescValue">Description Value: </label>
          <input
            type="text"
            id="newDescValue"
            name="desc_value"
            value={newReward.desc_value}
            onChange={handleNewRewardChange}
          />
          <br />
          <button type="submit">Create Reward</button>
        </form>
      </div>
    </div>
  );
};

export default AdminModifyRewards;
