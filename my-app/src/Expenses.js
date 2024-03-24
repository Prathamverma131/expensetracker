import styles from './Expenses.module.css';


function Expenses(){

    return <div className={styles.container}>
        <div className={styles.heading}>Expenses: <span className={styles.value}>$500</span></div>
        <button>+ Add Expense</button>
    </div>


}

export default Expenses;