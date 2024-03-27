import styles from './TransactionList.module.css';
import { CiPizza } from "react-icons/ci";
import { MdCancel } from "react-icons/md";

function TransactionList({idx,date,category,price,title,removeTransaction,setBalance,setExpense}){

    
    function updateValues(){

        setBalance((prev)=>prev+parseInt(price));
        setExpense((prev)=>prev-parseInt(price));
    }
    

    return <div className={styles.body}> <div className={styles.container}>

        <div className={styles.details}>
            <div className={styles.img_con}><CiPizza size={25}/></div>
            <div className={styles.info}>
                <div className={styles.title}>{title.toUpperCase()}</div>
                <div className={styles.date}>{date}</div>
            </div>

        </div>

        <div className={styles.edit}>

            <div className={styles.cost}>${price}</div>

            <div className={styles.logo_con} onClick={()=>{removeTransaction(idx);updateValues()}}><MdCancel size={25}/></div>

        </div>

    
    
    </div>
    <hr/>
    </div>
}

export default TransactionList;