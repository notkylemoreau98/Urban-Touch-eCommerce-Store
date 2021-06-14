import React from 'react';
import './styles/CheckoutProduct.css';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({id, image, title, price, hideButton }) {
	const [{ cart }, dispatch] = useStateValue();

	const removeFromCart = () => {
		dispatch({
			type: 'REMOVE_FROM_CART',
			id:id,
		})
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt=""/>

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				
				{!hideButton && (
					<button onClick={removeFromCart}>Remove from cart</button>
				)}
			</div>
		</div>
	)
}

export default CheckoutProduct
