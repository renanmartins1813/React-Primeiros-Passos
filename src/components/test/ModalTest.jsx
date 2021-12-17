import React from 'react'
import classes from './style.module.css'

export default function Modal_test(props) {
    function cancelHandler(){
        props.onCancel();
    }
    function confirmHandler(){
        props.onConfirm();
    }
    
    return (
        <div className={classes.modal}>
            <p>Are U sure, bro?!</p>
            <button className={`${classes.btn} ${classes.btnAlt}`} onClick={cancelHandler}>I'm afraid I am not</button>
            <button className={`${classes.btn}`} onClick={confirmHandler}>Confirm</button>
        </div>
    );
}
