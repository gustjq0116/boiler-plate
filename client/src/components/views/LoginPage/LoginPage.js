import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
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
      offset: 5,
      span: 19,
    },
  };

function LoginPage(props) {
    const dispatch = useDispatch();
    const [isChecked, setisChecked] = useState(false)

    const onFinish = values => {

        
        
        //console.log('Success:', isChecked);

        let body = {
            email: values.user.email,
            password: values.password,
            isChecked: isChecked
        }
        //console.log(loginUser(body));
        
        dispatch(loginUser(body))
        .then(response =>
            {
                if(response.payload.loginSuccess) {
                   // console.log(response.payload.userID)
                    if(isChecked)
                    {

                        window.localStorage.setItem('al', true);
                        window.localStorage.setItem('ui', response.payload.userID);
                    }
                    else
                    {
                        window.localStorage.setItem('al', false);
                        window.localStorage.setItem('ui', "");
                    }

                    props.history.push('/');

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
                remember: false,
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

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox onChange={() => setisChecked(!isChecked)}>자동 로그인</Checkbox>

                    <Button type="primary" htmlType="submit" style={{float:"right"}}>
                      <a href="/register">회원가입</a>
                    </Button>
                </Form.Item>

                <Form.Item 
                >
                    <Button type="primary" htmlType="submit" style={{ width: '100%'}}>
                      로그인
                    </Button>
                    
                </Form.Item>
            </Form>
                
            {/* <form style={{
                display:'flex', flexDirection: 'column'
                }} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEamilHandler}/>
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>
                <br />
                <button>
                    Login
                </button>
            </form> */}
        </div>
    )
}

export default LoginPage