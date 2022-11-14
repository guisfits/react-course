import React from 'react'
import classes from "./layout.module.css"
import MainNavigation from "./main_navigation";

export default function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>
        {props.children}
      </main>
    </div>
  )
}
