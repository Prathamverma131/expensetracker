import { useState } from 'react';
import styles from './Modal.module.css';

function Details({setModal,type="default",heading,balance,setBalance,setExpense,setFood,setTravel,setEntertainment,transactionList,setTransactionList}){

    const [title,setTitle] = useState(null);
    const [price,setPrice] = useState(null);
    const [category,setCategory] = useState(null);
    const [date,setDate] = useState(null);
    
    const [updatedBalance,setUpdatedBalance] = useState(0);
    

    let body = null;

    

    function validateNumber(price){

        const temp = parseInt(price);
       
        if(isNaN(temp)){
            return false;
        }
        if((typeof(temp)=='number')){
            return true;
        }

    }
    

    function updateChart(){

        if(category==="Food"){
            setFood((prev)=>prev+parseInt(price));
        }else if(category==="Entertainment"){
            setEntertainment((prev)=>prev+parseInt(price));
        }else if(category==="Travel"){
            setTravel((prev)=>prev+parseInt(price));
        }

    }

    function generateTransactionList(){
        var obj = {date:date,category:category,price:price,title:title};
        setTransactionList([...transactionList,obj]);
        setExpense((prev)=>prev+parseInt(price));
        setBalance((prev)=>prev-parseInt(price));
        setModal(false);
        updateChart();
    }

    function validateBalance(){

        

        if(parseInt(updatedBalance)&&validateNumber(updatedBalance)){
            
            setBalance((prev)=>prev+parseInt(updatedBalance));
            setModal(false);

        }else{
            alert("Enter a correct value")
        }

    }

    function validate(){

        if(title&&price&&category&&date){

            if(title.length>10){
                alert("Enter title less then 10 words")
            }else if(balance<price){
                alert("Price is greater than balance.")
            }else if(!validateNumber(price)){
                alert("Enter a number");
            }else{
                generateTransactionList();
            }


        }else{
            alert("Enter valid values");
        }

    }

    if(type==="expenses"){
        body = <div className={styles.expense_container}>

        <input type='text' placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <input type='text' placeholder='Price' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
        <select onChange={(e)=>{
            setCategory(e.target.value);
        }}>
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Travel">Travel</option>
        </select>
        <input type='date' onChange={(e)=>{setDate(e.target.value)}}/>
        <button onClick={()=>{validate()}} style={{color: "white",background: "#F4BB4AFF",borderRadius: "1rem",width: "16.7rem",boxShadow:"1px 2px 4px black"}}>Add Balance</button>
      <button style={{color: "#434343",background: "#E2E2E2FF",borderRadius: "1rem",boxShadow:"1px 2px 4px black"}} onClick={()=>{setModal(false)}}>Cancel</button> 
        </div>
    }else{
        body = <div className={styles.balance_container}>
            
            <input type='text' placeholder='Income Amount' value={updatedBalance} onChange={(e)=>{setUpdatedBalance(e.target.value)}} />
            <button onClick={()=>{validateBalance()}} style={{color: "white",background: "#F4BB4AFF",borderRadius: "1rem",boxShadow:"1px 2px 4px black"}}>Add balance</button>
            <button onClick={()=>{setModal(false)}} style={{color: "#434343",background: "#E2E2E2FF",borderRadius: "1rem",boxShadow:"1px 2px 4px black"}}>Cancel</button>
            </div>
    }
    

    return <>
    
    <div className={styles.modal_wrapper} onClick={()=>{setModal(false)}}></div>
    <div className={styles.des_wrapper}>
       <div className={styles.heading}>{heading}</div>
       {body}
    </div>
    </>


}

export default Details;