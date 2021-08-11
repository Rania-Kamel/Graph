import { css, cx } from '@emotion/css'
import React, { useState } from 'react';

function AddData({ AddNewData, setAddNewData }) {
  const style = css`
  form {
    width: fit-content;
    margin: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .input{
    height: 25px;
    margin-left: 10px;

  }
  .button{
    width: fit-content;
    margin: 10px;
    padding: 5px 20px;
    font-size: 20px;
  }

  `

  const [name, setName] = useState();
  const [score, setScore] = useState();


  const handelsubmit = () => {
    let number = parseInt(score, 10);
    setAddNewData([...AddNewData,
    {
      name,
      score: number
    }]);
  };


  return (
    <div className={cx(style)}>
      < form onSubmit={(e) => {
        e.preventDefault();
        handelsubmit()
        e.target.elements.name.value = ""
        e.target.elements.score.value = ""
      }}>
        <input type="text"
          autoFocus="on"
          autoComplete="off"
          placeholder="Enter name ...."
          className="input"
          name="name"
          onChange={e => { setName(e.target.value) }}
        />
        <input type="number"
          placeholder="Enter score ...."
          className="input"
          name="score"
          onChange={e => { setScore(e.target.value) }}
        />
        <input type="submit" className="button"
          value="Add" />
      </form>
    </div>


  );
}

export default AddData;

