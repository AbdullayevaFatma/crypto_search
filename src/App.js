import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await axios("https://api.coinranking.com/v2/coins?search");
    setCoins(res.data.data.coins);
  };

  useEffect(function () {
    getData();
  }, []);

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Search a coin..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </div>
    </div>
  );
}

export default App;
