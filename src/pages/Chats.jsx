import React from 'react'
import { Link } from 'react-router-dom'

const Chats = () => {
    return (
        <>
            <header className="header header-fixed border-0 style-2 bg-white">
                <div className="container">
                    <div className="header-content">
                        <div className="left-content">
                            <h4 className="title">Chats</h4>
                        </div>
                        <div className="mid-content">
                        </div>
                        <div className="right-content">
                        </div>
                    </div>
                </div>
            </header>

            <div className="page-content p-t100 p-b50">
                <div className="container">
                    <div className="dz-chat-search bg-white input-group input-group-icon input-mini">
                        <div className="input-group-text">
                            <div className="input-icon">
                                <i className="icon text-primary opacity-100 feather icon-search" />
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Search here..." />
                    </div>

                    <div className="title-bar">
                        <h6 className="title">Message</h6>
                    </div>
                    <ul className="message-list">
                        <li>
                            <Link to={"/chat"}>
                                <div className="media media-60">
                                    <img src="../assets/images/user/pic1.jpg" alt="image" />
                                </div>
                                <div className="media-content">
                                    <div>
                                        <h6 className="name">Leneve</h6>
                                        <p className="last-msg">Would love to!</p>
                                    </div>
                                    <div className="right-content">
                                        <span className="date">2m ago</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="active">
                            <a href="chat.html">
                                <div className="media media-60">
                                    <img src="../assets/images/user/pic2.jpg" alt="image" />
                                </div>
                                <div className="media-content">
                                    <div>
                                        <h6 className="name">Matt</h6>
                                        <p className="last-msg">Is that because we like the...</p>
                                    </div>
                                    <div className="right-content">
                                        <span className="date">4m ago</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="chat.html">
                                <div className="media media-60">
                                    <img src="../assets/images/user/pic3.jpg" alt="image" />
                                </div>
                                <div className="media-content">
                                    <div>
                                        <h6 className="name">Karthik</h6>
                                        <p className="last-msg">How do you know john?</p>
                                    </div>
                                    <div className="right-content">
                                        <span className="date">8h ago</span>
                                    </div>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Chats