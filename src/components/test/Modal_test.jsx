import React from 'react'

export default function Modal_test(props) {
    function cancelHandler(){
        props.onCancel();
    }
    function confirmHandler(){
        props.onConfirm();
    }
    
    return (
        <div className='modal'>
            <p>Are U sure, bro?!</p>
            <button className='btn btn--alt' onClick={cancelHandler}>I'm afraid I am not</button>
            <button className='btn' onClick={confirmHandler}>Confirm</button>
        </div>
    );
}
