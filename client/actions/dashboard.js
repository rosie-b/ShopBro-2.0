import request from '../utils/api'

export function receiveShoppingLists(shoppinglists){
  return {
      type: 'RECIEVE_SHOPPINGLISTS',
      shoppinglists

  }
}

//Use this function to get all the shopping lists for the currently logged in user
//You must use component did mount
export function getShoppingLists() {
  return (dispatch) => {
    return request( 'get', 'v1/shoppinglists' )
      .then (res => {
          dispatch(receiveShoppingLists(res.body))
      })
      .catch(err => {
          dispatch(showError(err.message))
      })
  }
}

export function receiveShoppingListById(shoppinglist){
  return {
      type: 'RECIEVE_SHOPPINGLIST_BY_ID',
      shoppinglist

  }
}

//Use this function to get a shopping list by shopping list id 
//You must use component did mount
export function getShoppingListById(id) {
  return (dispatch) => {
    return request( 'get', `v1/shoppinglists/${id}` )
      .then (res => {
          console.log('ACTION',res.body)
          dispatch(receiveShoppingListById(res.body))
      })
      .catch(err => {
          dispatch(showError(err.message))
      })
  }
}

export function deleteShoppingListByIdInStore (id) {
  return {
    type: 'DELETE_SHOPPINGLIST_BY_ID',
    id
  }
}
  
export function deleteShoppingListById (id) {
  return (dispatch) => {
    return request('delete', `v1/shoppinglists/${id}`)
      .then (res => {
        dispatch(deleteShoppingListByIdInStore(id))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
    }
}

export function receiveShoppingListTotals(shoppinglistTotals){
    return {
        type: 'RECIEVE_SHOPPINGLIST_TOTALS_BY_ID',
        shoppinglistTotals
  
    }
  }
  
  //Use this function to get a shopping list by shopping list id 
  //You must use component did mount
  export function getShoppingListTotals() {
    console.log('action totals')  
    return (dispatch) => {
      return request( 'get', 'v1/shoppingliststotals' )
        .then (res => {
            dispatch(receiveShoppingListTotals(res.body))
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }
  }
