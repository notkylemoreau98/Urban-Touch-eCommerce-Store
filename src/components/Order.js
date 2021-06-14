// Installed "moment" (good library for timestamps)
import React from 'react';
import './styles/Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';


function Order({ order }) {
	return (
		<div className="order">
			<h3>Order</h3>
			<p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
			<p className="order__id">
				<small>{order.id}</small>
			</p>

			{order.data.cart?.map(item => (
				<CheckoutProduct
					key={item.id}
					title={item.title}
					image={item.image}
					price={item.price}
					hideButton
				/>			
				))}

				<CurrencyFormat
					renderText = {(value) => (
						<>
							<p className="order__total">Order Total: {value}</p>
						</>
						)} 
						decimalScale={2}
						value={order.data.amount / 100}
						displayType={"text"}
						thousandSeparator={true}
						prefix={"$"}
				/>

		</div>
	)
}

export default Order
