import React, { useState } from 'react'
import './styles/Header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './styles/images/simple-logo.png'

function Header() {
	const [{ cart, user }, dispatch] = useStateValue();
	const [sideNav, setSidenav] = useState(false);
	const	[navScroll, setNavScroll] = useState(false);
	
	const handleAuth = () => {
		if(user) {
			auth.signOut();
		}
	};

	const showNav = () => setSidenav(!sideNav);

	const fillHeader = () => window.scrollY >= 40 ? setNavScroll(true) : setNavScroll(false);

	window.addEventListener('scroll', fillHeader);

	return (
		<div className={navScroll ? "header active" : "header"}>

			<section className="header__left">

				<div className="header__logo">
					<Link to='/'>
						<img src={Logo} alt="Logo"/>
					</Link>
				</div>

					<nav className="header__list">
						<ul>
							<Link to='./mens' className="header__link"><li>Men</li></Link>
							<Link to='./women' className="header__link"><li>Women</li></Link>
							<Link to='./accountPage' className="header__link"><span><li>{!user ? 'Guest' : 'Account'}</li></span></Link>
							<Link to={!user && './signin'} className="header__link">
								<div onClick={handleAuth} className="header__loginLogout">
									<span className="header__loginText"><li>{user ? 'Sign Out' : 'Sign In'}</li></span>
								</div>
								</Link>
						</ul>
				</nav>

				{/* Only visible on mobile devices */}
				<div className="header__mobile">
					<div>
						<Link to='#' className="header__mobileMenu">
							<MenuIcon onClick={showNav} className="header__mobileIcon" />									
						</Link>	
					</div>

					<nav className={sideNav ? 'header__mobileNav active' : "header__mobileNav"} >	
						<ul onClick={showNav}>
							<Link to='./mens' className="header__mobileLink"><li>Men</li></Link>
							<Link to='./women' className="header__mobileLink"><li>Women</li></Link>
							<Link to='./accountPage' className="header__mobileLink"><span><li>{!user ? 'Guest' : 'Account'}</li></span></Link>
							<Link to='./checkout' className="header__mobileLink"><li>Cart</li></Link>
							<Link to={!user && './signin'} className="header__mobileLink">
								<div onClick={handleAuth} className="header__moblieLoginLogout">
									<span className="header__loginText"><li>{user ? 'Sign Out' : 'Sign In'}</li></span>
								</div>
							</Link>
							<Link to="#" className="header__mobileNavClose header__mobileLink"><li>Close Menu</li></Link>
						</ul>
					</nav>
					
				</div>
			</section>
			
			<section className="header__right">
					<Link to='./checkout' className="header__link">
						<div className="header__cart">
							<ShoppingBasketIcon className="header__cartIcon"/>
							<span className="header__cartCount">{cart?.length}</span>
						</div>
				</Link>
			</section>
					
			</div>
)
}

export default Header
