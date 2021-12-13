import React from 'react'
import Header from './Header'
import classes from './Layout.module.css'
export default function Layout(props) {
    return (
        <div>
            <Header />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )
}
