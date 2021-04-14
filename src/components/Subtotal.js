import React from 'react';
import './styles/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getCartTotal } from '../reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
	const history = useHistory();
	const [{ cart }, dispatch] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat
					renderText = {(value) => (
						<>
							<p>
								Subtotal ({cart?.length} items): 
								<strong> {value}</strong>
							</p>
						</>
	)} 
					decimalScale={2}
					value={getCartTotal(cart)}
					displayType={"text"}
					thousandSeparator={true}
					prefix={"$"}
			/>

			<button onClick={e => history.push('/payment')}>Continue to Checkout</button>
		</div>
	)
}

export default Subtotal
