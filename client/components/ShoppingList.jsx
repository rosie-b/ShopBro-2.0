// ~*~ This component adds a new item to the shopping list ~*~ //
import React from 'react' 
import {connect} from 'react-redux'
import { addShoppingListItem, addToTotalSpend } from '../actions/shoppinglist'

import AddedItems from './AddedItems'

export class ShoppingList extends React.Component {
	constructor (props) {
		super(props)
		this.state = { // This sets the initial state of the input boxes //
			id: 0,
			name: '',
			cost: 0 // IMPORTANT: Initial value must be 0 (not empty ' '), so user can add item without cost and the totalSpend calc will still work (else it sends NaN as value and calc will not work) //
		}
		this.handleChange = this.handleChange.bind(this)
		this.addItem = this.addItem.bind(this)
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	addItem(e) {
		// This function adds the item to the store //
		e.preventDefault()
		//NOTE: It may be better to assign id to item in reducer - may cause problems with unique ids //
		let item = {id: this.state.id++, 
								name: this.state.name,
								cost_in_cents: this.state.cost}
		this.props.dispatch(addShoppingListItem(item))
		this.props.dispatch(addToTotalSpend(item.cost_in_cents))
		this.setState({  // This sets the state of the new input boxes on the page, ready to be updated by the user. //
			name: '',
			cost: 0  // IMPORTANT: Initial value must be 0 (not empty ' '), so user can add item without cost and the totalSpend calc will still work (else it sends NaN as value and calc will not work) //
		})

		// NOTE: TO DO - Need to add functionality to reset add buttons to placeholder values - use reset? //
		
	}

	// NOTE: The call to AddedItems may be better off in the Main component? //

	render() {
		return <div>
			<br/>
			<div className="column is-mobile">
				<div>
					{/* Renders items as they are created/edited/removed from the list. */}
					<AddedItems />  
				</div> 
				{/* Renders the initial input fields and add button to start the shopping list and it the starting point for all new items being added to the shopping list. */}
				<div className="field has-addons">
					{/* Input field for shopping item */}
					<input onChange={this.handleChange} className="input is-medium" type="text" value={this.state.name} name="name" placeholder="Enter item" />
					{/* Input field for the cost of the item */}
					<input onChange={this.handleChange} className="input is-medium" type="text" value={this.state.cost} name="cost" placeholder="Enter cost" />
					<div className="control">
						{/* Button to add the item */}
						<a className="button is-medium is-primary is-outlined is-mobile" onClick={this.addItem} type="submit" value="add item">
							Add
						</a>
					</div>
				</div>
			</div>
		</div>
	}
}

const mapStateToProps = (state) => {
	return {
		shoppingList: state.shoppingList
	}
}

export default connect(mapStateToProps)(ShoppingList)