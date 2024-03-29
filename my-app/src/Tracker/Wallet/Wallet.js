import styles from './Wallet.module.css';
import Modal from '../../Modal/Modal';
import { useState } from 'react';


function Wallet({balance,setBalance}){

    const [walletModal,setWalletModal] = useState(false);

    return <div className={styles.container}>

        <div className={styles.heading}>Wallet Balance: <span className={styles.value}>${balance}</span></div>
        <button onClick={()=>{setWalletModal(true)}}>+ Add Income</button>
        {walletModal&&<Modal heading="Add Balance" setBalance={setBalance} setModal={setWalletModal}/>}
    </div>


}

export default Wallet;