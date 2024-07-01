import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../store/userSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout())
        window.location.href = '/'
    }

    return (
        <div>
            <header className="header header-fixed bg-white border-0 style-2">
                <div className="container">
                    <div className="header-content">
                        <div className="left-content">
                            <h4 className="title">Profile</h4>
                        </div>
                        <div className="mid-content">
                        </div>

                    </div>
                </div>
            </header>
            <div className="page-content space-top p-b60">
                <div className="container pt-0">
                    <div className="profile-area style-2">
                        <div className="main-profile">
                            <div className="about-profile">
                                <div className="media rounded-circle">
                                    <img src="../assets/images/user/pic2.jpg" alt="profile-image" />

                                </div>
                            </div>
                            <div className="profile-detail">
                                <h4 className="name">Richard, 25</h4>
                                <p>Web Designer</p>
                                <a href="chat.html" className="chat-bubble"><i className="fa-solid fa-comment" />open to chat</a>
                            </div>
                        </div>

                        <div className="container">
                            <div className="dz-list">
                                <ul>
                                    <li>
                                        <a href="/basic-info" className="item-content item-link">
                                            <div className="dz-icon icon-sm">
                                                <i className="icon feather icon-user" />
                                            </div>
                                            <div className="dz-inner">
                                                <h6 className="dz-title">Update Your info</h6>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="item-content item-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop2" aria-controls="offcanvasTop">
                                            <div className="dz-icon icon-sm">
                                                <i className="icon feather icon-bell" />
                                            </div>
                                            <div className="dz-inner">
                                                <h6 className="dz-title">Notification</h6>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="about.html" className="item-content item-link">
                                            <div className="dz-icon icon-sm">
                                                <i className="icon feather icon-info" />
                                            </div>
                                            <div className="dz-inner">
                                                <h6 className="dz-title">About Developers</h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={handleLogout} className="item-content item-link">
                                            <div className="dz-icon icon-sm">
                                                <i className="icon feather icon-log-out" />
                                            </div>
                                            <div className="dz-inner">
                                                <h6 className="dz-title">Log out</h6>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile