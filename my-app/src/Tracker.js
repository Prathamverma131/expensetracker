import styles from './Tracker.module.css';
import Wallet from './Wallet';
import Expenses from './Expenses';
import Chart from './Chart';

function Tracker(){


    return <div className={styles.container}>

        <div className={styles.heading}>Expense Tracker</div>
        <div className={styles.body}>
            <Wallet/>
            <Expenses/>
            <Chart/>
        </div>

    </div>
}

export default Tracker;