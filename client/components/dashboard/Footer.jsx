import React from 'react'
import {Link} from 'react-router-dom'


function Footer (props) {
 
  return (
    <div className="navbar is-active is-fixed-bottom ">
      <div className="buttons is-centered">
      <div className="field is-grouped is-centered">
        <Link className="navbar-item is-dark" to="/dashboard"><button className="button is-dark">Dashboard</button></Link>
        <Link className="navbar-item is-dark" to="/main"><button className="button is-dark">Main</button></Link>
        <Link className="navbar-item is-dark" to="/settings"><button className="button is-dark">Settings</button></Link>
        </div>
      </div>
    </div>
  )
}


export default Footer