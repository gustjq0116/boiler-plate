import React, { useEffect } from 'react';
import axios from 'axios';

function LandingPage(props) {
    //console.log(props);

    useEffect(() =>
    {
        // axios.get('/api/hello')
        // .then(res => { console.log(res)})
        // .catch(err => { console.log(err)})
    })

    const onClickHandler = () =>
    {
        axios.get('/api/users/logout')
        .then(response =>
            {
                if(response.data.success)
                {
                    props.history.push('login');
                }
                else
                {
                    alert('로그아웃 실패');
                }
            })
    }


    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            시작 페이지
        </div>
        
    )
}

export default LandingPage