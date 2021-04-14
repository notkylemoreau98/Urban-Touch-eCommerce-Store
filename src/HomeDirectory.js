import React from 'react';
import './HomeDirectory.css';
import { Link } from 'react-router-dom';

function HomeDirectory() {
	return (
		<div className="directory">

			<section className="directory__title">
				<h2>Explore our latest collections</h2>
				<p>Updated regularly to keep you looking fresh.</p>
			</section>

			<section className="directory__departmentCards">
				<Link to="/mens" className="directory__link">
					<div className="directory__card" id="men__card">
						<h3>Men</h3>
					</div>
				</Link>

				<Link to="/women" className="directory__link">
					<div className="directory__card" id="women__card">
						<h3>Women</h3>
					</div>
				</Link>
			</section>

		</div>
	)
}

export default HomeDirectory
