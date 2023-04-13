import './Home.css';
import Header from '../components/Header.js';

const Home = (userInfo) => {

    return (
        <div>
            
            <Header />
            <div className="Home">
                <div id="home" className="Content">
                    <h1>Home</h1>
                </div>

                <div id="rewards" className="Content">
                    <h1>Rewards</h1>
                </div>
                
                <div id="faq" className="Content">
                    <h1>FAQ</h1>
                </div>
                
            </div>
        </div>
        
    );
}

export default Home;