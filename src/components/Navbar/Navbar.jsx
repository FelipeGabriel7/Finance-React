import React from "react";
import styles from './Navbar.module.css';

export function Navbar(){
    return(
        <>
            <div className={styles.navbar}>
                <h1 className={styles.title}> Finance $ </h1>
                <p className={styles.text}> O seu sistema de controle financeiro </p>
            </div>
        </>
    )
}