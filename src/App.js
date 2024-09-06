import React,{useEffect, useState} from 'react'
import './App.css'
import bdyCake from "./birthday-cake.jpg"
import bdyCakee from "./birthday-cakee.png"
import plussign from "./plus.png"
import minussign from "./minus.png"
import { type } from '@testing-library/user-event/dist/type'

const ScoreCard = ({teamName})=>{
  
  const SAMOSA_PRICE = 12 ; 
  const [quantity , setQuantity] = useState (1);
  const [totalBill , setTotalBill] = useState (SAMOSA_PRICE);
  
  const updateQuantity = (type) => {
  if(type === "plus"){
    setQuantity(quantity+1);
  }else if(type === "minus"  && quantity > 1){
    setQuantity(quantity-1)
  }}
  
  useEffect (()=>{
  
    const Toatal = (SAMOSA_PRICE*quantity);
    
  if(quantity < 10){
    setTotalBill(Toatal);
  }
  else if(quantity >= 10 && quantity <= 20){
    setTotalBill(Toatal - 20);
  }
  else { setTotalBill(Toatal - 50);
    
  }
  },[quantity]) 
  return (
    <div className='card'>
      <img src={bdyCakee} className='card-img'/>
      <h1 className='card-title'> {teamName}</h1>
      <p className='card-description'>
      Cake is a sweet, baked dessert that comes in various flavors and textures, 
      typically made from flour, sugar, eggs, and  oil.</p>



      <div className='sing-container'>
        <img src={minussign} className='sign' alt="minus"
        onClick={()=>updateQuantity("minus")}/>

        <span className='couting'>{quantity}</span>

        <img src={plussign} className='sign' alt="plus"
        onClick={()=>updateQuantity ("plus")}/>
      </div>
     
    </div>
  )
}

function App() {
return(
  <div >
    <h1 className='score-title'>SCORECEEPAR</h1>
  <div className='score-card-container'>
     <ScoreCard
      teamName= {"mumbai indian "}
      description = {'play for the pride of nashik'}/>

    <ScoreCard
     teamName= {"orange city nagpur"}
     description = {'we are the king of nagpur'}/>

   </div>
   </div>
) 
}


export default App