import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles/Login.css'
import { useState } from 'react'
import { auth } from '../firebase'

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            navigate('/');
        })
        .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user
                console.log(auth);
                if (auth) {
                    navigate("/", { replace: true });
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className='login__signInButton' type='submit' onClick={signIn} >Sign In</button>

                </form>

                <p>By continuing, you agree to Fake Amazon Clone's  Conditions of Use and Privacy Notice.</p>

                <button className='login__registerButton' onClick={register} >Create Account</button>

            </div>

        </div>
    )
}

export default Login