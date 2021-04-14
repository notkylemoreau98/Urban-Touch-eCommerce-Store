import React from 'react';
import './Showcase.css';
import { Link } from 'react-router-dom';
import Model from './images/Showcase Model.png'

function Showcase() {
	return (
		<div className='showcase'>

			<section className="showcase__imageContainer">
				<img src={Model} className="showcase__modelImage"/>
			</section>

			<section className="showcase__textContent">

				<div className="showcase__titles">		
					<h1><span>Imagine </span>the next level of <span>Fashion.</span></h1>
					<p>Cutting edge styles that work for you.</p>					
				</div>

					<Link to="/mens">
						<button className="showcase__shoppingButton">Start Shopping</button>
					</Link>

			</section>

		</div>
	)
}

export default Showcase
