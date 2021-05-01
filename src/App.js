// npm run build --> firebase deploy (if I want to deploy website again after making changes)

// To-do
// -Put components into folders
// -Double check 900px styles (Home)pn

import React, { useEffect } from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Showcase from './Showcase';
import HomeDirectory from './HomeDirectory';
import ComingSoon from './ComingSoon';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Orders from './components/Orders';
import Mens from './components/Mens';
import Women from './components/Women';
import AccountPage from './components/AccountPage';
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51IJ8afHi9uitH2NYs15ebIwSfFXmIBKtNI5trY7bBQsqltb1uZEsldlZ4yvPFgTA3A4oYziFSTcOYxcKNasWtUHi00HmNSb1cP');

function App() {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (

    <Router>

      <ScrollToTop />

       <div className="app">
        <Switch>
          <Route path="/mens">
            <Header />
            <Mens />
            <Footer />
          </Route>  

          <Route path="/women">
            <Header />
            <Women />
            <Footer />
          </Route>  

          <Route path="/signin">
            <Signin />
          </Route>  

           <Route path="/accountPage">
            <Header />
            <AccountPage />
            <Footer />
          </Route>  
          
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>  

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>  

          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>  

          <Route path="/">
            <Header />
            <Showcase />
            <HomeDirectory />
            <ComingSoon />
            <Footer />
          </Route>         
            
        </Switch>

    </div>

    </Router>
  );
}

export default App;
