import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../../actions/logout'
//Imported from https://www.npmjs.com/package/react-circular-progressbar
import CircularProgressbar from 'react-circular-progressbar'

//Circular progress bar showing percentage savings

function TotalSavings (props) {

  //Conditional statement required as logout threw a props.auth.user was undefined  
  let userName =  props.auth.user != null ? props.auth.user.user_name : ''

  function capitalizeFirstLetter(data) {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }

    return (
      <div>
        <div className="level-right">
          <button className="button" onClick={() => props.dispatch(logoutUser())}>Logout</button>
        </div>
        <div className='columns is-mobile is-centered'>
        <div className='column is-mobile is-8'>
        {console.log(props.totals[0])}

        {props.totals[0] && <CircularProgressbar  percentage={(props.totals[0].totalsavings / props.totals[0].totalbudget)*100} 
          textForPercentage={perc => `$${props.totals[0].totalsavings / 100}`} 
          styles={{
            path: { stroke: `rgba(244, 191, 68)`},
            text: { fill: `rgba(49 ,55 ,68)`}
          }}/>}
        </div>
        </div>
        {/* <Progress type="circle" percent={100} status="success" /> */}
        <h1 className="has-text-warning is-size-5">Hello <b>{capitalizeFirstLetter(userName)}</b> this is your Total Savings : $  
         <b>{props.totals[0] && (props.totals[0].totalsavings/100).toFixed(2)}</b></h1>
         <br/>
      </div>
    )
}

{/* Bring the below in once pulled in new changes */}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    // dashboardShoppingLists: state.dashboardShoppingLists
  }
}

export default connect(mapStateToProps)(TotalSavings) 