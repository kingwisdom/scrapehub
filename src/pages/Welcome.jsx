import React from 'react'
import { useDispatch } from 'react-redux'
import { older } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate()
    return (
        <div className="content-body">
            <div className="welcome-area" style={{ backgroundImage: 'url("../assets/images/background/bg1.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="welcome-inner flex-column">
                    <div className="logo-area">
                        <img className="logo" src="../assets/images/logo.png" alt="" />
                        <p className="para-title">Are you 18 years and older?.</p>
                    </div>
                    <div className="social-area">
                        <a style={{ cursor: 'pointer' }} onClick={() => {
                            dispatch(older());
                            navigation("/home")
                        }} className="btn btn-icon icon-start btn-tp w-100">
                            <span>Yes</span>
                        </a>

                        <a href="/register" className="btn btn-icon-outline btn-white icon-start w-100">
                            <img src="../assets/images/social-icon/telephone.svg" alt="" />
                            <span>No.</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome