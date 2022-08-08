import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import "./style.css"
function Login() {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let hardcodedCred = {
            email: 'hoang@gmail.com',
            password: '123456'
        }

        if ((emailInput === hardcodedCred.email) && (passwordInput === hardcodedCred.password)) {
            const token = '123456abcdef';
            sessionStorage.setItem('auth-token', token);
            navigate("/home");

        } else {

            alert('wrong email or password');
        }
    }

    return (
        <div className="login-page">

            <form className='form-login' autoComplete="off" onSubmit={handleLoginSubmit}>
                <fieldset>
                    <legend>Login:</legend>
                    <div className="form-group">
                    <label name = "email">Email:</label>
                    <input
                    name = "email"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={emailInput}
                    onChange={handleEmailChange}
                    />
                </div>
                <div className="form-group">
                <label name = "password">Password:</label>
                    <input
                    name = "password"
                    type="password"
                    autoComplete="new-password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={passwordInput}
                    onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
                </fieldset>
                
                
        </form>
        </div>
    );
}
export default Login;
