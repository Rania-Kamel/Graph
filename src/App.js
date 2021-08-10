import{css , cx} from '@emotion/css'
import AddData from './Adding/AddData'
import React, { useState } from 'react';

const data = [
  {name : "ishak" , score : 25},
  {name : "rania" , score :190},
  {name : "mariam" , score : 75},
  {name : "mena" , score : 100},
  {name : "thomas" , score : 150},
  

 ]

function App() {

  const [AddNewData , setAddNewData] = useState(data);

  
  const style = css`
  
    margin: auto;
    width: fit-content;
    height: 220px;
    margin-top: calc(50vh - 210px);
    border-bottom: 2px solid black;
    border-left: 2px solid;
    display: flex;
    flex-flow: wrap-reverse;
    .name{
      transform: rotate(90deg);
      font-size: 20px;
      font-style: oblique;
      font-weight: 500;
  } 
   

  `
 
   const styling = (score , index) =>{

    const style = css`
  
      width: 40px;
      margin: 0 10px;
      position: relative;
      animation : move${index} 2.5s linear forwards;
      @keyframes move${index} {
        from {height: 0px;}
        to {height: ${score}px;}
      }
     
    `
    return style;
   }

  return (
    <>
     <AddData AddNewData = {AddNewData} setAddNewData = {setAddNewData} />

     <div className={cx(style)}>
    {AddNewData.map(({score , name} , index) => (
     
      
       <div className={cx(styling(score , index))} style={{height: score , backgroundColor: "#" + score + "A"  }}>
       <div className="score" style={{marginTop : -13 ,  marginLeft: -60*(index+1)}}>{score}</div>
       <div className="name" style={{marginTop : score + 20  }}>{name}</div>
       </div>
       
       
     
      
      
      
    )

    )}
    </div>
       
     </>
  
     
  );
}

export default App;
