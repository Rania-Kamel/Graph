import { css, cx } from '@emotion/css'
import AddData from './Adding/AddData'
import React, { useState } from 'react';

const data = [
  { name: "ishak", score: 25 },
  { name: "rania", score: 10 },
  { name: "mariam", score: 75 },
  { name: "mena", score: 100 },
  { name: "thomas", score: 150 },


]


function App() {

  const [AddNewData, setAddNewData] = useState(data);


  const style = css`
  
    
    margin: auto;
    width: fit-content;
    height: 350px;
    margin-top: calc(100vh - 700px);
    border-bottom: 2px solid black;
    border-left: 2px solid;
    display: flex;
    
    .columnAndName{
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      margin-bottom: -67px;
    }
    .name{
      transform: rotate(90deg);
      font-size: 20px;
      font-style: oblique;
      font-weight: 500;
      width: 100px;
      margin-top: 40px;
      margin-left: -17px;
      
  } 
  .number{
    display: grid;
  }
 
   

  `

  const styling = (score, index) => {

    const style = css`
   
      width: 40px;
      margin: 0 10px;
      animation : move${index} .7s linear;
      @keyframes move${index} {
        from {height: 0px;}
        to {height: ${score}px;}
      }  
     
     
    `
    return style;
  }

  const nummers = () => {
    const number = []
    for (var i = 300; i > 0; i -= 50) {
      number.push(<div style={{ marginLeft: -35 }}>{i}</div>)
    }
    return number

  };

  return (
    <>
      <AddData AddNewData={AddNewData} setAddNewData={setAddNewData} />
      <div className={cx(style)}>
        <div className="number"> {nummers()}</div>
        {AddNewData.map(({ score, name }, index) => (
          <div className="columnAndName">
            <div className={cx(styling(score, index))} style={{ height: score, backgroundColor: "#" + score + "A" }}></div>
            <div className="name" >{name}</div>
          </div>
        )
        )}
      </div>
    </>
  );
}

export default App;
