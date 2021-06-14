import React from 'react';
import './styles/Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
	const [{ cart }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<div>
					<h2 className="checkout__title">Your Cart</h2>

					{cart.map(item => (
						<CheckoutProduct
							key={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
						/>
					))}
				</div>
			</div>

			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	)
}

export default Checkout