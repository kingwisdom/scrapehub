import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const PlayVideo = () => {
    const location = useLocation()
    const nav = useNavigate();
    const { item } = location.state;

    return (
        <>
            <header className="header header-fixed bg-white border-0">
                <div className="container">
                    <div className="header-content">
                        <div className="left-content">
                            <a href="javascript:void(0);" className="back-btn" onClick={() => nav("/home")}>
                                <i className="icon feather icon-arrow-left" />
                            </a>
                            <h6 className="title">Back</h6>
                        </div>
                        <div className="left-content">
                            <h4 className="title">{item.title}</h4>
                        </div>
                        <div className="mid-content">
                        </div>
                        <div className="right-content">
                        </div>
                    </div>
                </div>
            </header>
            <div className="page-content space-top p-b65">
                <div className="container pt-0">
                    <div className="row g-2">
                        <div className="col-12">
                            <iframe src={item?.video} frameborder="0" width="100%" height="315" scrolling="no" allowfullscreen></iframe>
                        </div>

                        <p>{item.views}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayVideo