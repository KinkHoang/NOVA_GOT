import { useNavigate } from 'react-router-dom';
import {useState, useContext} from "react";
import { Typography, Input, Form} from "antd";
import { AuthContext } from "../context/AuthContext";

import "./style.css";
import * as S from "./styles";

const { Title } = Typography;
function Login() {
  const {  handleToken } = useContext(AuthContext);
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleLoginSubmit = () => {

        let data = {
            email: 'hoang@gmail.com',
            password: '123456'
        }

        if ((emailInput === data.email) && (passwordInput === data.password)) {
            window.localStorage.setItem("token", data.token);
            const token = '123456abcdef';
            sessionStorage.setItem('auth-token', token);
            handleToken(Date.now());
            navigate("/");

        }
    }

    return (

         <S.LoginContainer>
         <S.Inside>
           <Title
             style={{
               color: "red",
               textAlign: "center",
             }}
             level={2}
           >
             Nova GOT
           </Title>
   
           <S.FormLogin>
           <Form className='form-login' autoComplete="off" onFinish={handleLoginSubmit}>
                    
                    <Form.Item
                    name='email'
                    rules={[{ required: true, message: 'Please enter your email' }]}>
                    <Input
                    name = "email"
                    type="text"
                    className="input-login"
                    id="exampleInputEmail1"
                    placeholder="Enter your email"
                    value={emailInput}
                    onChange={handleEmailChange}
                    />
                    </Form.Item>

                <Form.Item
                  name='password'
                  rules={[{ required: true, message: 'Please enter your password' }]}
                >
                    <Input.Password
                    name = "password"
                    type="password"
                    autoComplete="new-password"
                    id="input-login"
                    placeholder="Password"
                    value={passwordInput}
                    onChange={handlePasswordChange}
                    />
                    </Form.Item>

                <button type="submit" className="btn btn-primary">
                    Login
                </button>
                
                
        </Form>

           </S.FormLogin>
         </S.Inside>
       </S.LoginContainer>
    );
}
export default Login;
