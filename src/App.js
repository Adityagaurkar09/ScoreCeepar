import React,{useEffect, useState} from 'react'
import './App.css'
import plussign from "./plus.png"
import minussign from "./minus.png"

const ScoreCard = ({teamName,description ,logo ,changeScore})=>{
  
  const [score , setScore] = useState (1);
  
  const updateScore = (type) => {
  if(type === "plus"){
    setScore(score+1);
  }else if(type === "minus"){
    setScore(score-1)
  }}
  
  useEffect(()=> {
    changeScore(score);
  },[score]);
  return (
    <div className='card'>
      <span className='logo'>{logo}</span>
      <h1 className='card-title'> {teamName}</h1>
      <p className='card-description'>
      {description}</p>



      <div className='sing-container'>
        <img src={minussign} className='sign' alt="minus"
        onClick={()=>updateScore("minus")}/>

        <span className='couting'>{score}</span>

        <img src={plussign} className='sign' alt="plus"
        onClick={()=>updateScore ("plus")}/>
      </div>
     
    </div>
  )
}

const WinnerCard = ({score1 , score2 , setShowWinner})=>{
let winner = '';
if (score1===score2){
  winner = 'match is draw';
}
else if(score1 > score2){
  winner = 'team 1 won';
}

else{
  winner = 'team 2 won';
}

  return<div className='winner-card-container'>
    <div className='winner-card-text-container'>
      {winner}
      <div>
        <button type="button"
        className='cancel-btn'
        onClick={()=> setShowWinner(false)}>
          cancel</button>
      </div>
      </div>
    </div>
};

function App() {

  const [team1Score , setTeam1Score]= useState(0);
  const [team2Score , setTeamS2core]= useState(0);
  const [ showWinner , setShowWinner]= useState(false);

return(
  <div >
    <h1 className='score-title'>SCORECEEPAR</h1>
  <div className='score-card-container'>
     <ScoreCard
      teamName= {"mumbai indian "}
      description = {'play for the pride of nashik'}
      logo = {'MI'}
      changeScore = {setTeam1Score}/>

    <ScoreCard
     teamName= {"orange city nagpur"}
     description = {'we are the king of nagpur'}
     logo = {'N'}
     changeScore = {setTeamS2core}/>
   </div>

 {showWinner ? <WinnerCard score1={team1Score} score2={team2Score} setShowWinner={setShowWinner}/>:null }

   <button type="button" className='app-btn' onClick={()=>setShowWinner(true)}>who won ?</button>
   </div>
) 
}


export default App