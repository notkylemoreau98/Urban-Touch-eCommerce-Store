export const initialState = {
	cart: [],
	user: null
}

// Selector
export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);
	
const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				cart: [...state.cart, action.item],	// Copies the array of cart objects and adds on the new item
			};

		case 'EMPTY_CART':
			return {
				...state,
				cart: [],
			}

		case 'REMOVE_FROM_CART':
			const index = state.cart.findIndex((cartItem) => cartItem.key === action.id);
			let newCart = [...state.cart];

			if(index >= 0) {
				newCart.splice(index, 1);
			} else {
				console.warn('Cannot remove product as the id does not match an item in the cart');
			}
			return {
				...state,
				cart: newCart
			}

			case 'SET_USER':
				return {
					...state,
					user: action.user
				} 

		default:
			return 
	}
} 

export default reducer;