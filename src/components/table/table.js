import React, { useEffect, useState } from "react";
import ItemRow from "../item/item";
import styles from "./table.module.scss";

function Table() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getCoins = async () => {
    const resp = await fetch("https://api.coinlore.net/api/tickers/")
    .then((response) => response.json());
    setCoins(resp.data);
  };

  const searchCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getCoins();
  }, []);

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div>
      <div>
        
      <h1> Top 100 Coins </h1>
      <button className={styles.btnLogout} onClick={handleLogout}> Logout </button>
      </div>
      <input
        className="searchBar"
        placeholder="Search Coin"
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead className={styles.tableHead}>
          <tr>
            <td> # Rank </td>
            <td> Name </td>
            <td> Price </td>
            <td> Change 1h </td>
            <td> Change 24h </td>
            <td> Change 7D </td>
          </tr>
        </thead>
        <tbody>
          {searchCoins.map((coin, index) => {
            return <ItemRow coin={coin} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
