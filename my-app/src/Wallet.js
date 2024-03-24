import styles from './Wallet.module.css';


function Wallet(){

    return <div className={styles.container}>

        <div className={styles.heading}>Wallet Balance: <span className={styles.value}>$4500</span></div>
        <button>+ Add Income</button>

    </div>


}

export default Wallet;