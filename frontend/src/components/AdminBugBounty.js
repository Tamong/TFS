import { useState, useEffect } from "react";

const AdminBugBounty = ({ userInfo, token }) => {
  const [allBounties, setAllBounties] = useState([]);
  const [unprocessedBounties, setUnprocessedBounties] = useState([]);
  const [processedBounties, setProcessedBounties] = useState([]);
  const [selectedBountyType, setSelectedBountyType] = useState("Bug Bounty");
  const [currentBounties, setCurrentBounties] = useState([]);
  const [selectedReportId, setSelectedReportId] = useState(null);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  const [rewardAmount, setRewardAmount] = useState(0);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!token) {
      return;
    }
    const fetchBounties = async () => {
      const response = await fetch("http://localhost:3000/api/bounty/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const data = await response.json();

      const allBounties = data.map((bounty) => {
        if (bounty.processor_msg === null) {
          return { ...bounty, processor_msg: " " };
        } else {
          return bounty;
        }
      });

      setAllBounties(allBounties);
      setCurrentBounties(allBounties);

      const unprocessedBounties = data.filter(
        (bounty) => bounty.processor_ee_id === null
      );
      setUnprocessedBounties(unprocessedBounties);

      const processedBounties = data.filter(
        (bounty) => bounty.processor_ee_id !== null
      );
      setProcessedBounties(processedBounties);
    };

    fetchBounties();
  }, [token]);

  const handleButtonClick = (bountyType) => {
    if (bountyType === "all") {
      setSelectedBountyType("all");
      setCurrentBounties(allBounties);
    } else if (bountyType === "processed") {
      setSelectedBountyType("processed");
      setCurrentBounties(processedBounties);
    } else if (bountyType === "unprocessed") {
      setSelectedBountyType("unprocessed");
      setCurrentBounties(unprocessedBounties);
    }
  };

  const handleSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(userInfo.ee_ID);
    const response = await fetch("http://localhost:3000/api/bounty/process/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        report_id: selectedReportId,
        ee_ID: selectedEmployeeId,
        processor_ee_ID: userInfo.ee_ID,
        reward_amount: Number(rewardAmount),
        notes: notes,
      }),
    });

    const data = await response.json();
    // delete the row from the table
    const newBounties = currentBounties.filter(
      (bounty) => bounty.report_id !== selectedReportId
    );
    setCurrentBounties(newBounties);
    setUnprocessedBounties(newBounties);

    console.log(data);
  };

  return (
    <div>
      <h2>Bug Bounty Submissions</h2>
      <button onClick={() => handleButtonClick("all")}>All Bounties</button>
      <button onClick={() => handleButtonClick("processed")}>
        Processed Bounties
      </button>
      <button onClick={() => handleButtonClick("unprocessed")}>
        Unprocessed Bounties
      </button>
      <table>
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Employee ID</th>
            <th>Title</th>
            <th>Description</th>
            {selectedBountyType !== "unprocessed" && <th>Coin Rewarded</th>}
            {selectedBountyType !== "unprocessed" && <th>Processor EE ID</th>}
            {selectedBountyType !== "unprocessed" && <th>Processor Message</th>}
            {selectedBountyType === "unprocessed" && <th>Reward Coins</th>}
            {selectedBountyType === "unprocessed" && <th>Notes</th>}
            {selectedBountyType === "unprocessed" && <th>Process</th>}
          </tr>
        </thead>
        <tbody>
          {currentBounties
            .sort((a, b) => b.report_id - a.report_id)
            .map((bounty) => (
              <tr
                key={bounty.report_id}
                onClick={() => {
                  setSelectedReportId(bounty.report_id);

                  if (selectedBountyType === "unprocessed") {
                    setSelectedReportId(bounty.report_id);
                    setSelectedEmployeeId(bounty.ee_id);
                    setRewardAmount(0);
                    setNotes("");
                  }
                }}
                className={
                  selectedReportId === bounty.report_id ? "selected-row" : ""
                }
              >
                <td>{bounty.report_id}</td>
                <td>{bounty.ee_id}</td>
                <td>{bounty.title}</td>
                <td className="bugtext">{bounty.bug_description}</td>
                {selectedBountyType !== "unprocessed" && (
                  <td>{bounty.coin_rewarded}</td>
                )}
                {selectedBountyType !== "unprocessed" && (
                  <td>{bounty.processor_ee_id}</td>
                )}
                {selectedBountyType !== "unprocessed" && (
                  <td className="admintext">{bounty.processor_msg}</td>
                )}

                {selectedBountyType === "unprocessed" && (
                  <td>
                    {selectedReportId === bounty.report_id && (
                      <input
                        type="number"
                        min="0"
                        max="10000"
                        value={rewardAmount}
                        placeholder="0"
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          setRewardAmount(e.target.value);
                        }}
                      />
                    )}
                  </td>
                )}

                {selectedBountyType === "unprocessed" && (
                  <td>
                    {selectedReportId === bounty.report_id && (
                      <input
                        type="text"
                        value={notes}
                        placeholder="Notes"
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          setNotes(e.target.value);
                        }}
                      />
                    )}
                  </td>
                )}

                {selectedBountyType === "unprocessed" && (
                  <td>
                    {selectedReportId === bounty.report_id && (
                      <button onClick={handleSubmit}>Process</button>
                    )}
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBugBounty;
