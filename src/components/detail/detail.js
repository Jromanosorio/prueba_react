import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./detail.module.scss";

export default function Detail() {
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState();
  const params = useParams();

  const getDetails = async () => {
    await fetch("https://api.coinlore.net/api/ticker/?id=" + params.id)
      .then((response) => response.json())
      .then((data) => {
        setDetail(data[0]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getDetails();
  });

  if (isLoading) {
    return (
      <div>
        <h1> Cargando... </h1>
      </div>
    );
  }

  return (
    <div className={styles.containerCoin}>
      <div className={styles.containerDetail}>
        <div>
          <h1> {detail.name} </h1>
          <div className={styles.rank}> Puesto #{detail.rank} </div>
        </div>
        <div>
          <p>Precio de {detail.name} </p>
          <h2>${detail.price_usd}</h2>
        </div>
      </div>

      <div className={styles.containerDetail}>
        <div className={styles.change}>
          <p>Change 1h</p>
          <h2>
            <div> {detail.percent_change_1h}% </div>
          </h2>
        </div>
        <div className={styles.change}>
          <p>Change 24h</p>
          <h2>
            <div> {detail.percent_change_24h}% </div>
          </h2>
        </div>
        <div className={styles.change}>
          <p>Change 7D</p>
          <h2>
            <div> {detail.percent_change_7d}% </div>
          </h2>
        </div>
      </div>
    </div>
  );
}
