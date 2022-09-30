import React from "react";
import styles from './Cards.module.css'
import { BsFillArrowUpCircleFill , BsFillArrowDownCircleFill , BsCurrencyDollar} from "react-icons/bs";

export function Cards({entries , exit , total}){

    return(
        <section className={styles.values}>
                <div className={styles.entries}>
                   <p> Entradas <BsFillArrowUpCircleFill/> </p>
                    <h2 value={entries}> {entries} </h2>
                </div>
                <div className={styles.exit}>
                    <p> Saidas <BsFillArrowDownCircleFill/> </p>
                    <h2 value={exit}> {exit} </h2>
                </div>
                <div className={styles.some}>
                    <p> Total <BsCurrencyDollar/> </p>
                    <h2 value={total}> {total} </h2>
                </div>
        </section>
    )
}