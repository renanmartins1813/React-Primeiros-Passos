import React from "react";
import ModalTest from './ModalTest';
import BackdropTest from './BackdropTest';
import { useState } from "react";
import classes from './style.module.css'

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
        <div className={classes.card}>
            <h2>{props.text}</h2>
            <div className={classes.actions}>
                <button className={classes.btn} onClick={deleteHandler}>Propando</button>
            </div>

            {modalIsOpen && <ModalTest onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
            {modalIsOpen && <BackdropTest onClick={closeModalHandler} /> }
        </div>
    );
}