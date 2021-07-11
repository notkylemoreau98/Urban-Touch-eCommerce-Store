import React from 'react';
import './styles/AccountPage.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';


function AccountPage() {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className="accountPage">
			<h1 className="accountPage__message">Welcome <span>{!user ? 'Guest' : user.email}</span>, click on the button below to view your previous orders!</h1>

			<Link to="/orders" className="accountPage__link">
				<button className="accountPage__previousOrdersButton">View Previous Orders</button>
			</Link>

			<p>As a disclaimer, the product images used on this website are not of my own. Because of this, the stripe portion of this application will remain in test mode in order to prevent anyone from purchasing a product of which does not exist. This application is only for prototype purposes and any product images will immediately be changed upon request.</p>
		</div>
	)}

export default AccountPage
