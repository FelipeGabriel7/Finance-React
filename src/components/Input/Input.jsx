import React from "react";
import { Button } from "./Button";
import styles from "./Input.module.css";
import { useState  } from "react";
import { Desc } from "../Desc/Desc";

export function Input({handleAdd , transiction , setListTransaction}) {
  const[value , setValue] = useState("");
  const[desc ,setDesc] = useState("");
  const[checked , setChecked] = useState(false);

  function gerateId(){
     const random  = Math.floor(Math.random() * (1000 - 1) + 1)
     return random;
  }


  function verifyIsEmpty(){
    if(!value || !desc){
      alert(" O campo está vazio");
      return;
    }else if(value <= 0){
      alert(' Não é possível adicionar valores negativos ')
      return
    }

    const transaction = {
      id: gerateId(),
      desc: desc,
      value: value,
      checked: checked
    }

    handleAdd(transaction);
    setDesc("");
    setValue("");
  }
  
  return (
    <div className={styles.addFinans}>
      <div className={styles.inputsAdd}>
        <div className={styles.information}>
          <label htmlFor="desc"> Descrição </label>
          <input type="text" value={desc} placeholder="descrição" id="desc" name="desc" onChange={(e) =>  setDesc(e.target.value)} />

          <label htmlFor="val"> Valor </label>
          <input type="number" value={value} placeholder="valor" id="val" name="val" onChange={(e) => setValue(e.target.value)}></input>
        </div>

        <div className={styles.type}>
          <label htmlFor="entries">
            {" "}
            <input type="radio" id="entries" name="entries" checked onChange={() => setChecked(!checked)}/> Entrada
          </label>
          <label htmlFor="exit">
            {" "} 
            <input type="radio" id="exit" name="exit" onChange={() => setChecked(!checked)}/> Saida
          </label>
          </div> 
          <Button click={verifyIsEmpty}/>
        </div>

        <Desc itens={transiction}  setItens={setListTransaction}/>
    </div>
  );
}
