import React,{useEffect, useState} from 'react'
import './App.css'
import bdyCake from "./birthday-cake.jpg"
import bdyCakee from "./birthday-cakee.png"
import plussign from "./plus.png"
import minussign from "./minus.png"
import { type } from '@testing-library/user-event/dist/type'

const ScoreCard = ()=>{
  
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
      <h1 className='card-title'> CAKE</h1>
      <p className='card-description'>
      Cake is a sweet, baked dessert that comes in various flavors and textures, 
      typically made from flour, sugar, eggs, and  oil.</p>
      
      <div className='price'>
      <p className='card-price'> PRICE ₹ {SAMOSA_PRICE}</p>
      <p className='total-price'> TOTAL ₹ {totalBill}</p>
      </div>

      <p className='card-error'>{quantity > 10 ?  "bulk order hai time lagenga": null }</p>

      <div className='sing-container'>
        <img src={minussign} className='sign' alt="minus"
        onClick={()=>updateQuantity("minus")}/>

        <span className='couting'>{quantity}</span>

        <img src={plussign} className='sign' alt="plus"
        onClick={()=>updateQuantity ("plus")}/>
      </div>
      <button className='btn'>BUY NOW</button>
    </div>
  )
}

function App() {
return(
  <div >
    <h1 className='score-title'>SCORECEEPAR</h1>
  <div className='score-card-container'>
     <ScoreCard/>
    <ScoreCard/>
    <ScoreCard/>
   </div>
   \</div>
) 
}


export default App