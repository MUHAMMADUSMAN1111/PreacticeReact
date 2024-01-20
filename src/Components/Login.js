// import React from 'react'
// import { Button, Checkbox, Form, Input } from 'antd';
// import { Container } from 'react-bootstrap';

// const Login = () => {
//     const onFinish = (values) => {
//         console.log('Success:', values);
//     };
//     const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//     };
//     const logo = 'https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Real-Estate-Logo-Design-PNG-Transparent-1536x1536.png'
//     return (
//         <div >
//             <center>
//                 <img src={logo} style={{height: '200px'}}/>
//                 <h1 style={{margin: '20px'}}>LOGIN FORM </h1>
//                 <Form 
//                     name="basic"
//                     labelCol={{
//                         span: 8,
//                     }}
//                     wrapperCol={{
//                         span: 16,
//                     }}
//                     style={{
//                         paddingLeft: '40px',
//                         paddingRight: '55px',
//                         maxWidth: 400,
//                         paddingTop: '50px',
//                         border: '2px solid black',
//                         borderRadius: '15px'
//                     }}
//                     initialValues={{
//                         remember: true,
//                     }}
//                     onFinish={onFinish}
//                     onFinishFailed={onFinishFailed}
//                     autoComplete="off"
//                 >
//                     <Form.Item
//                         label="Username"
//                         name="username"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please input your username!',
//                             },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>

//                     <Form.Item
//                         label="Password"
//                         name="password"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please input your password!',
//                             },
//                         ]}
//                     >
//                         <Input.Password />
//                     </Form.Item>

//                     <Form.Item
//                         name="remember"
//                         valuePropName="checked"
//                         wrapperCol={{
//                             offset: 8,
//                             span: 16,
//                         }}
//                     >
//                         <Checkbox>Remember me</Checkbox>
//                     </Form.Item>

//                     <Form.Item
//                         wrapperCol={{
//                             offset: 8,
//                             span: 16,
//                         }}
//                     >
//                         <Button type="primary" htmlType="submit">
//                             Submit
//                         </Button>
//                     </Form.Item>
//                 </Form>
//                 </center>
//         </div>
//     );
// }

// export default Login

import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Container } from 'react-bootstrap';

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const logo = 'https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Real-Estate-Logo-Design-PNG-Transparent-1536x1536.png'
    return (
        <>
            <Container>
                <center>
                    <img src={logo} style={{ height: '200px' }} />
                    <h1 style={{ margin: '20px' }}>LOGIN FORM </h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        style={{
                            paddingLeft: '40px',
                            paddingRight: '55px',
                            maxWidth: 400,
                            height: 350,
                            paddingTop: '50px',
                            // border: '2px solid Grey',
                            borderRadius: '5px'
                        }}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button"
                                style={{ margin: '10px' }}
                            >
                                Log in
                            </Button>
                            Or <a href="/signup"
                                style={{ margin: '10px' }}
                            >register now!</a>
                        </Form.Item>
                    </Form>
                </center>
            </Container>
        </>
    );
};
export default Login;