
import './App.css';
import Tracker from './Tracker/Tracker';
import Transactions from './Transactions/Transactions';
import { useState,useEffect } from 'react';

function App() {
  const [transactionList,setTransactionList] = useState([]);
  const [balance,setBalance] = useState(5000);
  const [expense,setExpense] = useState(0);

  

  


  

  
  return (
    <div className="App">
      <Tracker transactionList={transactionList} balance={balance} setBalance={setBalance}  expense={expense} setExpense={setExpense}  setTransactionList={setTransactionList}/>
     {transactionList.length? <Transactions transactionList={transactionList} balance={balance} setBalance={setBalance} expense={expense} setExpense={setExpense} setTransactionList={setTransactionList}/> : <div className='empty'>There are no recent transactions...</div>}
    </div>
  );
}

export default App;
