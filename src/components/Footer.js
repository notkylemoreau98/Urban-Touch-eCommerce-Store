import React from 'react';
import './styles/Footer.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';


function Footer() {
	const [{ user }, dispatch] = useStateValue();

		const handleAuth = () => {
		if(user) {
			auth.signOut();
		}
	};

	return (
		<div className="footer">
			
			<div className="footer__departments">
				<h3>Departments</h3>
				<ul>
					<Link to='./mens' className="footer__link"><li>Men</li></Link>
					<Link to='./women' className="footer__link"><li>Women</li></Link>
				</ul>
			</div>

			<div className="footer__account">
				<h3>Account</h3>
				<ul>
					<Link to='./accountPage' className="footer__link"><span><li>{!user ? 'Guest' : 'Account'}</li></span></Link>
					<Link to={!user && './signin'} className="footer__link">
						<div onClick={handleAuth} className="footer__loginLogout">
							<span className="footer__loginText"><li>{user ? 'Sign Out' : 'Sign In'}</li></span>
						</div>
						</Link>
						<Link to="./orders" className="footer__link" ><li>Orders</li></Link>
				</ul>
			</div>

		</div>
	)
}

export default Footer
