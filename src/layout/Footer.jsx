import React from 'react'

const Footer = () => {
    return (
        <div className="menubar-area style-4 footer-fixed">
            <div className="toolbar-inner menubar-nav">
                <a href="/home" className="nav-link active">
                    <i className="flaticon flaticon1-poker-cards" />
                    <span>Videos</span>
                </a>
                <a href="/search" className="nav-link active">
                    <i className="flaticon flaticon-search" />
                    <span>Search</span>
                </a>
                <a href="#" className="nav-link">
                    <i className="flaticon flaticon1-chat" />
                    <span>soon</span>
                </a>

            </div>
        </div>
    )
}

export default Footer