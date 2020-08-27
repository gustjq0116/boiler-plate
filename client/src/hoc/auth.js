import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth, loginUser } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null)
{
    function AuthenticationCheck(props)
    {
        const dispatch = useDispatch();
        useEffect(() => 
        {
            dispatch(auth()).then( response =>
                {
                   
                    if(!response.payload.isAuth)
                    {
                        ////자동로그인 체크되었을 경우
                        if(window.localStorage.getItem('al') === 'true')
                        {
                            console.log(window.localStorage.getItem('al'))
                            let body = {
                                userId: window.localStorage.getItem('ui'),
                                autoLogin: true
                            }
                            // console.log(body)

                            dispatch(loginUser(body))
                            .then(response =>
                                {
                                    console.log(response.payload)
                                    if(response.payload.loginSuccess) {
                                        console.log(response.payload)
   
                                        window.location.reload(false)  
                                        //props.history.push('/');

                                    }
                                })
                        }



                        if(option)
                        {
                            props.history.push('/login');
                        }
                    }
                    else
                    {
                        if(adminRoute && !response.payload.isAdmin)
                        {
                            props.history.push('/');
                        }
                        else
                        {
                            if(option === false)
                            {
                                props.history.push('/');
                            }
                        }
                    }
                })

        }, [])

        return (
            <SpecificComponent {...props}/>
        )
    }


    return AuthenticationCheck;
}