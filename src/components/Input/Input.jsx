import React from "react";
import { Button } from "./Button";
import styles from "./Input.module.css";
import { useState  } from "react";
import { Desc } from "../Desc/Desc";

export function Input({handleAdd , transaction , setListTransaction}) {
  const[value , setValue] = useState("");
  const[desc ,setDesc] = useState("");
  const[checked , setChecked] = useState(false);

  function generateId(){
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
      id: generateId(),
      desc: desc,
      value: value,
      checked: checked
    }

    handleAdd(transaction);
    setDesc("");
    setValue("");
  }


  return (
    <div>
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
            <input type="radio" id="entries" name="group1" defaultChecked onChange={() => setChecked(!checked)}/> Entrada
          </label>
          <label htmlFor="exit">
            {" "} 
            <input type="radio" id="exit" name="group1"  onChange={() => setChecked(!checked)}/> Saida
          </label>
          </div> 
          <Button click={verifyIsEmpty}/>
        </div>
    </div>
    <Desc itens={transaction}  setItens={setListTransaction}/>
    </div>
  );
}
