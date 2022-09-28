import React from "react";
import styles from './item.module.scss';

export default function ItemRow({coin}) {
    return(
        <tr className={styles.item} id={coin.id}>
            <td className={styles.itemrow}>{coin.rank}</td>
            <td className={styles.itemrow}>
                <a href={`/coin/${coin.id}`}>{coin.name}</a>
            </td>
            <td className={styles.itemrow}>{coin.price_usd} USD$</td>
            <td className={styles.itemrow}>{coin.percent_change_1h} % </td>
            <td className={styles.itemrow}>{coin.percent_change_24h} % </td>
            <td className={styles.itemrow}>{coin.percent_change_7d} % </td>
        </tr>
    )
}
