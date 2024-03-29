
import './App.css';
import Tracker from './Tracker/Tracker';
import Transactions from './Transactions/Transactions';
import { useState,useEffect } from 'react';

function App() {
  const [transactionList,setTransactionList] = useState([]);
  const [balance,setBalance] = useState(0);
  const [expense,setExpense] = useState(0);
  const [isBal,setIsBal] = useState(false);
  

  useEffect(()=>{

    if(localStorage.getItem("balance")){
      
      setBalance(parseInt(localStorage.getItem("balance")));
      
    }else{
      setBalance(5000);
      localStorage.setItem("balance",JSON.stringify(5000));
    }

    if(localStorage.getItem("expense")){
      setExpense(parseInt(localStorage.getItem("expense")));
    }else{
      setExpense(0);
    }

    if(localStorage.getItem("list")){
      setTransactionList(JSON.parse(localStorage.getItem("list")));
    }else{
      setTransactionList([]);
    }


  },[]);

  useEffect(()=>{
   if(balance){
    localStorage.setItem("balance",JSON.stringify(balance));}

    if(expense){
      localStorage.setItem("expense",JSON.stringify(expense));}

    if(transactionList.length){
      localStorage.setItem("list",JSON.stringify(transactionList));}

  },[balance,expense,transactionList]);


  


  

  
  return (
    <div className="App">
      <Tracker transactionList={transactionList} balance={balance} setBalance={setBalance}  expense={expense} setExpense={setExpense}  setTransactionList={setTransactionList}/>
     {transactionList.length? <Transactions transactionList={transactionList} balance={balance} setBalance={setBalance} expense={expense} setExpense={setExpense} setTransactionList={setTransactionList}/> : <div className='empty'>There are no recent transactions...</div>}
    </div>
  );
}

export default App;
