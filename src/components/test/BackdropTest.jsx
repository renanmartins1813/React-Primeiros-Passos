import React from 'react'
import classes from './style.module.css'

export default function Backdrop_test(props) {
    return (
        <div className={classes.backdrop} onClick={props.onClick} />
    );
}
