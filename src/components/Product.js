import React from 'react';
import './styles/Product.css';
import { useStateValue } from '../StateProvider';


function Product({ id, title, image, price}) {
const [{ cart }, dispatch] = useStateValue();

	const addCartItem = () => {
		dispatch({
			type: "ADD_TO_CART",
			item: {
				id: id,
				title: title,
				image: image,
				price: price
			},
		});
	};


	return (
		<div className="product">
			<img className="product__image" src={ image } alt=""/>
			<h3 className="product__title">{ title }</h3>
			<div className="product__price">
				<p>${ price }</p>

				<button onClick={addCartItem}>Add to Cart</button>
			</div>
		</div>
	)
}

export default Product
