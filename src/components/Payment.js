import React, { useState, useEffect } from 'react';
import './styles/Payment.css';
import { useStateValue } from '../StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { getCartTotal } from '../reducer';
import { db } from '../firebase';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios';

function Payment() {
	const [{ cart, user }, dispatch] = useStateValue();
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState('');
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState(null);

	const history = useHistory();
	const stripe = useStripe();
	const elements = useElements();


	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				url: `/payments/create?total=${getCartTotal(cart) * 100}` //x100 because stripe expects value in pennies
			});
			setClientSecret(response.data.clientSecret);
				console.log(clientSecret);
		};

		getClientSecret(); 
	}, [cart])


	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement)
			}
		}).then(({ paymentIntent }) => { //paymentIntent (confirmation) is a stripe prop
				db.collection('users')
					.doc(user?.uid)
					.collection('orders')
					.doc(paymentIntent.id)
					.set({
						cart: cart,
						amount: paymentIntent.amount,
						created: paymentIntent.created
					})

				setSucceeded(true);
				setError(null);
				setProcessing(false);

				dispatch({
					type: 'EMPTY_CART',
				})

				history.replace('/orders'); 
		});
	}


	const handleChange = e => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : '');
	}

	return (
		<div className="payment">

			<h1>
				Checkout ( <Link to='./checkout'>{cart?.length} items</Link> )
			</h1>

			<div className="payment__container">

				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>8314 TBD Drive</p>
						<p>Austin, TX</p>
					</div>
				</div>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Review Items and Delivery</h3>
					</div>
					<div className="payment__items">
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

				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>

					<div className="payment__details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />

							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText = {(value) => (
										<>
											<h3>Order Total: {value}</h3>
										</>
										)} 
									decimalScale={2}
									value={getCartTotal(cart)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
									/>
									<button disabled={processing || disabled || succeeded}>
										<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
									</button>
							</div>

							{/* Will display an error if something wrong with card */}
							{error && <div>{error}</div>}

						</form>
					</div>

				</div>

			</div>
		</div>
	)
}

export default Payment
