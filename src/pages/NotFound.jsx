import React from 'react'

const NotFound = () => {
    return (
        <div className="content-body">
            <div className="welcome-area" style={{ backgroundImage: 'url("../assets/images/background/bg1.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="welcome-inner flex-column">
                    <div className="logo-area">
                        <img className="logo" src="../assets/images/404.png" alt="" />
                        <p className="para-title">The page you requested is not found.</p>
                    </div>
                    <div className="social-area">
                        <a href="/home" className="btn btn-icon icon-start btn-tp w-100">
                            <span>Go back to home</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound