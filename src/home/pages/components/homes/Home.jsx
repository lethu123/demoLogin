import React from 'react'
import { useSelector } from 'react-redux'
import { log_out } from '../../../services/components/auths/authAction';

const Home = () => {
    const currentUser = useSelector(state => state.authReducer.user);
    const logout = () => {
        log_out();
    }
    return (
        <div>
           <p>thông tin user</p>
           <br/>
            <p>{currentUser.username}</p>
            <p><button onClick={logout}>logout</button></p>
        </div>
    )
}

export default Home
