import styles from './Tracker.module.css';
import Wallet from './Wallet/Wallet';
import Expenses from './Expenses/Expenses';
import Chart from './Chart/Chart';
import { useState,useEffect } from 'react';

function Tracker({transactionList,setTransactionList,balance,setBalance,expense,setExpense}){

    
    
    const [food,setFood] = useState(0);
    const [entertainment,setEntertainment] = useState(0);
    const [travel,setTravel] = useState(0);
    const [pieData,setPieData] = useState(null);

    

    

    useEffect(()=>{

        setPieData({"expenses":[{"type": "Food", "count": food},   
        {"type": "Entertainment", "count": entertainment},
        {"type": "Travel", "count": travel}]})
        

    },[expense]);






    return <div className={styles.container}>

        <div className={styles.heading}>Expense Tracker</div>
        <div className={styles.body}>
            <Wallet balance={balance} setBalance={setBalance}/>
            <Expenses expense={expense} transactionList={transactionList} setTransactionList={setTransactionList} setExpense={setExpense} setBalance={setBalance} balance={balance} setFood={setFood} setTravel={setTravel} setEntertainment={setEntertainment}/>
            <Chart data={pieData}/>
        </div>

    </div>
}

export default Tracker;