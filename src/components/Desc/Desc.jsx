import React from "react";
import styles from "./Desc.module.css";
import { DescDelete } from "./DescDeleyte";

export function Desc({ itens, setItens }) {

  function deleteItens(id) {
    alert('Removendo Item');

      const newItens = itens.filter((transaction) => transaction.id !== id);
      setItens(newItens);
      localStorage.setItem("transactions", JSON.stringify(newItens));
    }
  

  return (
    <>
      <div className={styles.history}>
        <p className={styles.border}> Histórico </p>
        {itens?.map((item) => (
          <DescDelete  key={item.id} item={item} deleteItens={deleteItens} />
        ))}
      </div>
    </>
  );
}
