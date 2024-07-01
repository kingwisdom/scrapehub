import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserInfo = () => {
    const nav = useNavigate();
    return (
        <>
            <header className="header header-fixed bg-white">
                <div className="container">
                    <div className="header-content">
                        <div className="left-content me-3">
                            <a onClick={() => nav('/profile')} className="back-btn">
                                <i className="icon feather icon-arrow-left" />
                            </a>
                        </div>
                        <div className="mid-content d-flex align-items-center text-start">

                            <div>
                                <h6 className="title">Basic Info</h6>
                            </div>
                        </div>
                        <div className="right-content">
                        </div>
                    </div>
                </div>
            </header>
            <div className="page-content space-top">
                <div className="container">
                    <div className="dz-list">
                        <ul>
                            <li>
                                <a href="#" className="item-content item-link">
                                    <div className="dz-icon">
                                        <i className="icon feather icon-user-check" />
                                    </div>
                                    <div className="dz-inner">
                                        <h6 className="dz-title">Name</h6>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="item-content item-link">
                                    <div className="dz-icon">
                                        <i className="icon feather icon-calendar" />
                                    </div>
                                    <div className="dz-inner">
                                        <h6 className="dz-title">Age</h6>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="item-content item-link">
                                    <div className="dz-icon">
                                        <svg height={24} viewBox="0 0 512 512" width={24}>
                                            <path d="m271 136c0-74.991-60.561-136-135-136-74.641 0-136 61.379-136 136 0 69.407 53.042 126.739 121 134.175v90.825h-45c-8.284 0-15 6.716-15 15s6.716 15 15 15h45v45c0 8.284 6.716 15 15 15s15-6.716 15-15v-45h45c8.284 0 15-6.716 15-15s-6.716-15-15-15h-45v-90.838c67.406-7.486 120-64.793 120-134.162zm-241 0c0-58.449 47.552-106 106-106 57.897 0 105 47.551 105 106 0 57.897-47.103 105-105 105-58.448 0-106-47.103-106-105z" />
                                            <path d="m391 241.825v-129.612l34.394 34.393c5.857 5.858 15.355 5.859 21.213 0 5.858-5.858 5.858-15.355 0-21.213l-60-60c-5.857-5.858-15.355-5.858-21.213 0l-60 60c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.858 21.213 0l34.393-34.393v129.625c-67.406 7.486-120 64.793-120 134.162 0 74.991 60.561 136 135 136 74.641 0 136-61.379 136-136 0-69.407-53.042-126.739-121-134.175zm-15 240.175c-57.897 0-105-47.551-105-106 0-57.897 47.103-105 105-105 58.448 0 106 47.103 106 105 0 58.449-47.552 106-106 106z" />
                                        </svg>
                                    </div>
                                    <div className="dz-inner">
                                        <h6 className="dz-title">Gender</h6>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="item-content item-link">
                                    <div className="dz-icon">
                                        <i className="icon feather icon-map-pin" />
                                    </div>
                                    <div className="dz-inner">
                                        <h6 className="dz-title">Location</h6>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInfo