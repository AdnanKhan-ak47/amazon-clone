import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';

function App() {

  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("User is >>>>> ", authUser);

      if(authUser){
        // the user just logged in | the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
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
          <Route path="/checkout" element={<> <Header /> <Checkout /> </>} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<> <Header /> <Home /> </>} />
          {/* <Route path="/" element={} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
