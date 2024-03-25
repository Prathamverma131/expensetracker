import styles from './Expenses.module.css';
import Modal from './Modal';
import { useState } from 'react';


function Expenses({expense,balance,transactionList,setTransactionList,setExpense,setBalance,setFood,setTravel,setEntertainment}){

    const [expenseModal,setExpenseModal] = useState(false);
   

    return <div className={styles.container}>
        <div className={styles.heading}>Expenses: <span className={styles.value}>${expense}</span></div>
        <button onClick={()=>{setExpenseModal(true)}}>+ Add Expense</button>
        {expenseModal&&<Modal transactionList={transactionList} setTransactionList={setTransactionList} setFood={setFood} setTravel={setTravel} setEntertainment={setEntertainment} setModal={setExpenseModal} setExpense={setExpense} setBalance={setBalance} balance={balance} type="expenses" heading="Add Expenses"/>}
    </div>


}

export default Expenses;