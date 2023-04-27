import "./Home.css";
import Header from "../components/Header.js";

const Home = (userInfo) => {
  return (
    <div>
      <Header />
      <div className="Home">
        <div id="home" className="Content">
          <h1>Welcome to TFSCoin! </h1>
        </div>

        <div id="rewards" className="Content">
          <h1>
            You can earn rewards by participating in
            <br />
            the bug bounty program, as well as checking in every day!
          </h1>
        </div>

        <div id="faq" className="Content">
          <h1>FAQ</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
