import { useState, useEffect } from "react";
import { Cards } from "./components/Cards/Cards";
import { Footer } from "./components/Footer/Footer";
import { Input } from "./components/Input/Input";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const dataForLocal = localStorage.getItem("transactions");
  const [listTransaction, setListTransaction] = useState(
    dataForLocal ? JSON.parse(dataForLocal) : []
  );
  const [entries, setEntries] = useState(0);
  const [exit, setExit] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    const totalExits = listTransaction.filter(item => item.checked).map((transaction) => Number(transaction.value))
    const totalEntries = listTransaction.filter(item => !item.checked).map((transaction) => Number(transaction.value))

    const exitR = totalExits.reduce((acc, valor) => acc + valor, 0).toFixed(2);
    const entriesR = totalEntries.reduce((acc, valor) => acc + valor, 0).toFixed(2);

    const total = Math.abs(entriesR - exitR).toFixed(2);

    setEntries(`R$ ${entriesR}`);
    setExit(`R$ ${exitR}`);
    setTotal(`${Number(entriesR) < Number(exitR) ? "-" : ""} R$ ${total}`)

  }, [listTransaction]);

  function handleAdd(transaction){
    const newTransactions = [...listTransaction , transaction];
    setListTransaction(newTransactions);
    localStorage.setItem("transactions" , JSON.stringify(newTransactions));
  }

  return (
    <div>
      <Navbar />
      <Cards entries={entries} total={total} exit={exit} />
      <Input handleAdd={handleAdd} transaction={listTransaction}  setListTransaction={ setListTransaction}/>
      <Footer/>
    </div>
  );
}

export default App;
