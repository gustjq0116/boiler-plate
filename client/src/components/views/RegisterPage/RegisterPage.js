import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: {
      span: 0,
    },
    wrapperCol: {
      span: 0,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

function RegisterPage(props) {
    console.log(props)
    const dispatch = useDispatch();

    const onFinish = values => {

        
        if(values.password !== values.passwordconfirm)
            return alert("비밀번호와 비밀번호 확인이 같지 않습니다")
        //console.log('Success:', values);

        let body = {
            email: values.user.email,
            password: values.password
        }
        //console.log(loginUser(body));
        
        dispatch(registerUser(body))
        .then(response =>
            {
                if(response.payload.success) {
                    props.history.push('/login');
                }
                else{
                    alert("회원가입 실패");
                }
            })
      };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };



    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{  width: '50%', maxWidth: '500px'}}
            >
                <Form.Item
                    name={['user', 'email']}
                    rules={[
                    {
                        type: 'email',
                        required: true,
                         message: '이메일을 올바르게 입력하세요',
                    },
                    ]}
                >
                    <Input placeholder="이메일"/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                    {
                    required: true,
                    message: '비밀번호를 올바르게 입력하세요',
                    },
                    ]}
                >
                    <Input.Password placeholder="비밀번호"/>
                </Form.Item>
                <Form.Item
                    name="passwordconfirm"
                    rules={[
                    {
                    required: true,
                    message: '비밀번호를 올바르게 입력하세요',
                    },
                    ]}
                >
                    <Input.Password placeholder="비밀번호 확인"/>
                </Form.Item>

                <Form.Item //{...tailLayout}
                >
                    <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                      회원가입
                    </Button>
                </Form.Item>
            </Form>



            {/* <form style={{
                display:'flex', flexDirection: 'column'
                }} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEamilHandler}/>
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler}/>
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>
                <label>Password Confirm</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                <br />
                <button>
                    회원가입
                </button>
            </form> */}
        </div>
    )
}

export default RegisterPage


