import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import { Typography, Input} from "antd";

import "./style.css";
import * as S from "./styles";

const { Title } = Typography;
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

            
          
         <S.LoginContainer>
         <S.Inside>
           <Title
             style={{
               color: "white",
               textAlign: "center",
             }}
             level={2}
           >
             Login
           </Title>
   
           <S.FormLogin>
           <form className='form-login' autoComplete="off" onSubmit={handleLoginSubmit}>
                    <div className="form-group">
                    
                    <input
                    name = "email"
                    type="text"
                    className="input-login"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                    value={emailInput}
                    onChange={handleEmailChange}
                    />
                </div>
                <div className="form-group">

                    <Input.Password
                    name = "password"
                    type="password"
                    autoComplete="new-password"
                    id="input-login"
                    placeholder="Password"
                    value={passwordInput}
                    onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
                
                
        </form>
             {/* <Form
               form={loginForm}
               initialValues={{ remember: true }}
               onFinish={(values) => handleLogin(values)}
               autoComplete="off"
             >
               <Form.Item
                 name="email"
                 rules={[{ required: true, message: "Please input your email!" }]}
               >
                 <Input
                   className="input-login"
                   placeholder="Email/Số điện thoại của bạn"
                 />
               </Form.Item>
               <Form.Item
                 name="password"
                 rules={[
                   { required: true, message: "Please input your password!" },
                 ]}
               >
                 <Input.Password
                   className="input-login"
                   placeholder="Mật khẩu của bạn"
                 />
               </Form.Item>
               <Form.Item name="remember" valuePropName="checked">
                 <Checkbox className="checkbox-login">Remember me</Checkbox>
               </Form.Item>
               <Form.Item className="form-login">
                 <Button htmlType="submit" className="btn-login">
                   Đăng nhập
                 </Button>
               </Form.Item>
               <Divider
                 className="divider-login"
                 style={{
                   color: "white",
                 }}
               >
                 Hoặc
               </Divider>
               <Form.Item style={{ pointerEvents: "none" }}>
                 <Button
                   style={{ pointerEvents: "none" }}
                   className="btn-login btn-login-fb"
                 >
                   Đăng nhập với Facebook
                   <FacebookFilled />
                 </Button> */}
               {/* </Form.Item> */}
   
               

           </S.FormLogin>
         </S.Inside>
       </S.LoginContainer>
    );
}
export default Login;
