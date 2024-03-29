import styles from './Transactions.module.css';
import TransactionList from './TransactionList';

function Transactions({transactionList,setTransactionList,setBalance,setExpense}){

    //dummy data:- var list = [{date: '2024-03-26', category: 'Food', price: '100', title: 'show'},{date: '2024-03-26', category: 'Food', price: '100', title: 'show'}]
    function removeTransaction(idx){

        var updatedList = [];
        for(var i=0;i<transactionList.length;i++){

            if(idx===i){
                continue;
            }
            updatedList.push(transactionList[i]);
        }

        setTransactionList([...updatedList]);
        
    }

    return <div className={styles.container}>

            <div className={styles.heading}><i>Recent Transactions</i></div>

            <div className={styles.body}>
                {transactionList.map((item,idx)=>{
                    return <TransactionList setBalance={setBalance} setExpense={setExpense}  removeTransaction={removeTransaction} idx={idx} date={item.date} category={item.category} price={item.price} title={item.title} setTransactionList={setTransactionList} key={idx}/>
                })}
            </div>

        </div>

}

export default Transactions;