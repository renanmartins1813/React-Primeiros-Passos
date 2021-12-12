import React from "react";
import Modal_test from './Modal_test';
import Backdrop_test from './Backdrop_test';
import { useState } from "react";

export default function Test(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    function deleteHandler(){
        console.log(props.text + ' ai');
        setModalIsOpen(true);
    }
    function closeModalHandler(){
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className='btn' onClick={deleteHandler}>Propando</button>
            </div>

            {modalIsOpen && <Modal_test onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
            {modalIsOpen && <Backdrop_test onClick={closeModalHandler} /> }
        </div>
    );
}