import React from "react";
import { BsArrowBarUp , BsArrowBarDown } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'
import styles from './DescDelete.module.css'; 


export function DescDelete({item , deleteItens , key}){
    return(
        <div className={styles.item} key={key}>
            <p> {item.desc} </p>
            <p> {item.value} </p>
            <p className={styles.icons}>
            {item.checked ? (
                <BsArrowBarDown style={{color: "#f14"}}/>
            ) : (
                <BsArrowBarUp style={{color: "green"}} />
            )}

            <FaTrash onClick={() => deleteItens(item.id)}/>
            </p>
        </div>
    )
}