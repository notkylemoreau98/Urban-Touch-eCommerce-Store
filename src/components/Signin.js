import React, { useState } from 'react';
import './styles/Signin.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import Logo from './styles/images/simple-logo.png'


function Signin() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = e => {
		e.preventDefault(); 

		auth.signInWithEmailAndPassword(email, password)
			.then(auth => {
					history.push('/')
			})
			.catch(error => alert(error.message));
	};	 

	const register = e => {
		e.preventDefault(); 
	
		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log(auth);
				if(auth) {
					history.push('/')
				}
			})
			.catch(error => alert(error.message));
	};	 

	return (
		<div className="signin">

				<div className="signin__logo">
				<Link to='/home'>
					<img src={Logo} alt="Logo"/>
				</Link>
			</div>

			<div className="signin__container">
				<h1>Sign-in</h1>

				<form>
					<p><strong>Email</strong> (Test: testoutmyproject@gmail.com)</p>
					<input type="email" value={email} onChange={e => setEmail(e.target.value)} />

					<p><strong>Password</strong> (Test: Test123)</p>
					<input type="password" value={password} onChange={e => setPassword(e.target.value)} />

					<button type="submit" className='signin__button' onClick={signIn}  >Sign In</button>
				</form>

				<p className="signin__accountMessage">Don't have an account? Sign up below.</p>
				<button className="signin__createAccountButton" onClick={register}>Create an Account</button>
			</div>

		</div>
	)
}

export default Signin
