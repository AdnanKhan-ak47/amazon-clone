import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './components/Orders';

const promise = loadStripe('pk_test_51LLli2SHER3233RS4XbPOBcEliXqJ0PFAEQ3QMYNVPvXhzFQfA3BhrmeimGbSfBBLodEXzbLW0z0amJBGzS4pCwM00dhULikiM');

function App() {

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("User is >>>>> ", authUser);

      if (authUser) {
        // the user just logged in | the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <div className="App">
      <Router >
        <Routes>
          <Route exact path="/checkout" element={
            <> <Header />
              <Checkout />
            </>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/orders" element={
            <>
            <Header />
          <Orders />
          </>
          } />
          <Route exact path="/payment" element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          } />
          <Route path="/" element={<> <Header /> <Home /> </>} />
          <Route path="*" element={<Navigate to="/" replace />} />
          {/* <Route path="/" element={} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
