import Balance from "./Balance";
import Logout from "./Logout";

const UserInfo = ({ userInfo, token, balanceUpdate, setBalanceUpdate }) => {
  return (
    <div>
      {userInfo !== null ? (
        <p>Welcome, {userInfo.username}!</p>
      ) : (
        <p>Loading...</p>
      )}
      {userInfo !== null ? (
        <p>Your Wallet Address: {userInfo.wallet_address}</p>
      ) : (
        <p>Loading...</p>
      )}

      <Balance
        userInfo={userInfo}
        token={token}
        balanceUpdate={balanceUpdate}
        setBalanceUpdate={setBalanceUpdate}
      />
      <Logout />
    </div>
  );
};

export default UserInfo;
