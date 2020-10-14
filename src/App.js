import React , {useState} from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpences } from "./components/IncomeExpences";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import "./App.css";

const App = () => {

  const [text , setText] = useState('')
  const [amount , setAmount] = useState(0)
  const [transactions ,setTransaction ] = useState([])


  const handeText = (e) =>{
    setText(e.target.value)
  }

  const handelAmount = (e) => {
    setAmount(e.target.value)
  }

  const handelSubmit = (e) =>{
    e.preventDefault()
    const transactionsCopy = [...transactions]
    const transaction = {text : text , amount : +amount}
    transactionsCopy.push(transaction)
    setTransaction(transactionsCopy)
  }

  const handelDelet = (index) =>{
    const transactonsCopy = [...transactions]
    transactonsCopy.splice(index,1)
    setTransaction(transactonsCopy)
  }

  return (
    <>
      <Header />
      <div className="cont">
        <Balance userInput={transactions} />
        <IncomeExpences userInput={transactions}  />
        <TransactionList delet={ handelDelet}  userInput={transactions} />
        <AddTransaction submit={handelSubmit} amount={handelAmount} text={handeText} />
      </div>
    </>
  );
};

export default App;


