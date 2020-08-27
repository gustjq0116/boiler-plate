import React, { useState, useEffect } from 'react';
import { Drawer, Button, Menu, Icon } from 'antd';
import { useSelector } from 'react-redux';
import Axios from 'axios';

function Menus(props) {
    const [offset, setoffset] = useState(true)
    console.log("Menus")
    let user = useSelector(state => state.user)
    //console.log(props)
    
    
    
    useEffect(() => {

        //console.log("useEffect[]")
    }, [])

    useEffect(() => {
       // console.log("useEffect[user]")

        //setuser(cuser)
    }, [offset])
    const logout = () =>
    {
        Axios.get('/api/users/logout')
        .then(response =>
            {
                if(response.data.success)
                {
                    window.location.reload(false)  
                }
                else
                {
                    alert('로그아웃 실패');
                }
            })
    }
    
    
    return (
        <div>
            {console.log("return")}
            
            {user.userData &&
                <div>
                {console.log(user.userData.isAuth)}
                {!user.userData.isAuth ?
                <Menu mode={props.mode}>
                    <Menu.Item key="Home" onClick={() => props.history.push('/')}>
                        홈
                    </Menu.Item>
                    
                    <Menu.Item key="login" onClick={() => props.history.push('/login')}> 
                        로그인
                    </Menu.Item>
                        
                    <Menu.Item key="signin" onClick={() => props.history.push('/register')}>
                        회원가입
                    </Menu.Item>
                </Menu>

            
            
                    :
                <Menu mode={props.mode}>
                    <Menu.Item key="Home" onClick={() => props.history.push('/')}>
                        홈
                    </Menu.Item>
                    <Menu.Item key="logout" onClick={() => logout()}>
                        로그아웃   
                    </Menu.Item>
                </Menu>
            
                }

            
            </div>
            }
        </div>
    )
}

export default Menus