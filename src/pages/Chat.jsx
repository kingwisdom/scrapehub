import React from 'react'
import { useNavigate } from 'react-router-dom'

const Chat = () => {
    const nav = useNavigate();
    return (
        <>
            <header className="header header-fixed bg-white">
                <div className="container">
                    <div className="header-content">
                        <div className="left-content me-3">
                            <a onClick={() => nav('/chats')} className="back-btn">
                                <i className="icon feather icon-arrow-left" />
                            </a>
                        </div>
                        <div className="mid-content d-flex align-items-center text-start">
                            <a href="javascript:void(0);" className="media media-40 rounded-circle me-3">
                                <img src="../assets/images/user/pic1.jpg" alt="/" />
                            </a>
                            <div>
                                <h6 className="title">Miselia,24</h6>
                            </div>
                        </div>
                        <div className="right-content">
                        </div>
                    </div>
                </div>
            </header>

            <div className="page-content space-top p-b50">
                <div className="container">
                    <div className="chat-box-area">
                        <div className="chat-content">
                            <div className="message-item">
                                <div className="bubble">Hi Richard , thanks for adding me</div>
                                <div className="message-time">08:35</div>
                            </div>
                        </div>
                        <div className="chat-content user">
                            <div className="message-item">
                                <div className="bubble">Hi Miselia , your welcome , nice to meet you too</div>
                                <div className="message-time">08:40</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <footer className="footer border-top fixed bg-white">
                <div className="container p-2">
                    <div className="chat-footer">
                        <form>
                            <div className="form-group">
                                <div className="input-wrapper message-area">
                                    <div className="append-media" />
                                    <input type="text" className="form-control" placeholder="Send message..." />
                                    <a href="javascript:void(0);" className="btn-chat">
                                        <i className="icon feather icon-send" />
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Chat