import React, { useState, useEffect } from 'react';
import './styles/Orders.css';
import Order from './Order'
import { db } from '../firebase';
import { useStateValue } from '../StateProvider';

function Orders() {
	const [{ user }, dispatch] = useStateValue();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if(user) {
			db.collection('users')
			.doc(user?.uid)
			.collection('orders')
			.orderBy('created', 'desc')
			.onSnapshot(snapshot => (
				setOrders(snapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data()
				})))
			))
		} else {
			setOrders([])
		}

	}, [user])

	return (
		<div className="orders">
			<h1>Your Orders</h1>

			<div className="orders__order">
				{orders?.map(order => (
					<Order order={order} key={order.id} />
				))}
			</div>
		</div>
	)
}

export default Orders
