import React from "react";

export default function Test(props) {
    function deleteHandler(){
        console.log(props.text + ' ai')
    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className='bnt' onClick={deleteHandler}>Propando</button>
            </div>
        </div>
    );
}