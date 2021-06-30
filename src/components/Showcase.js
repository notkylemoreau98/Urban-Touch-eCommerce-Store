import React from 'react';
import './styles/Showcase.css';
import { Link } from 'react-router-dom';

function Showcase() {
	return (
		<div className='showcase'>
			<section className="showcase__textContent">

				<div className="showcase__titles">		
					<h1>Imagine the next level of Fashion</h1>
					<p>Cutting edge styles that work for you</p>					
				</div>

					<Link to="/mens">
						<button className="showcase__shoppingButton">Start Shopping</button>
					</Link>

			</section>

		</div>
	)
}

export default Showcase
