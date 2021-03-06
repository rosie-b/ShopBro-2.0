import React from 'react'
import {Link} from 'react-router-dom'
import Budget from './Budget'
import ShoppingList from './ShoppingList'


function Alert(props) {
  return (
    <div className="column">  
      {!props.noBudget ?  
        <div className="notification is-info">
          <p className= "has-text-primary has-text-weight-bold title is-6">You have gone over your budget.  Remove some items!</p>
        </div>
      :
        <div className="notification is-info">
          <p className= "has-text-primary title is-6">Don't forget to set your budget!</p>
        </div>}           
    </div>)
}

export default Alert

//this component exports solely the react component, hence no {connect} being imported and export default connect()(Alert)
//this gets done by container/AlertContainer.js

//without this we wouldn't be able to test react by itself 

