import React from "react";

export default function Test(props) {
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className='bnt'>Propando</button>
      </div>
    </div>
  );
}