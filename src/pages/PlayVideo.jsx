import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { GetRelatedVideos } from '../services/AppServices';

const PlayVideo = () => {
    const location = useLocation()
    const [loading, setLoading] = useState(false)
    const [related, setRelated] = useState([])

    const nav = useNavigate();
    const { item } = location.state;
    // console.log(item.id)
    useEffect(() => {
        getRelated()
    }, [])

    const [currentVid, setCurrentVid] = useState(item?.video)

    const getRelated = async () => {
        setLoading(true)
        await GetRelatedVideos(item.id).then(response => {
            // console.log(response.data)
            if (response.data.success) {
                setRelated(response?.data.data)
            }
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <>
            <header className="header header-fixed bg-white border-0">
                <div className="container">
                    <div className="header-content">
                        <div className="left-content">
                            <a className="back-btn" onClick={() => nav(-1)}>
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
                            <iframe src={currentVid} frameborder="0" width="100%" height="315" scrolling="no" allowfullscreen></iframe>
                        </div>

                        <p>{item.views}</p>
                    </div>
                </div>
                <h3 className='text-center'>Related Videos</h3>
                <div className="row g-2">
                    {related?.map((item, index) => (
                        <div className="col-6" key={index}>
                            <div className="dz-media-card style-5" onClick={() => {
                                setCurrentVid(item?.video)
                            }}>
                                {/* <i className="flaticon flaticon-play" /> */}

                                <a href="#" className="dz-media" style={{ position: 'relative' }}>
                                    <img src={!item?.image ? "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" : item?.image} alt="" style={{ height: 170 }} />
                                </a>
                                <img src="assets/icons/play.png" alt="play icon" style={{ position: 'absolute', top: '40%', left: '40%', height: 40 }} />
                                <div className="dz-content">
                                    <div className="left-content">
                                        <h6 className="title">{item?.duration}</h6>
                                        <span className="about">{item?.views}</span>
                                    </div>

                                    <small style={{ textAlign: 'center' }}>{item?.title?.substring(0, 35)}...</small>

                                </div>
                            </div>
                        </div>))}
                </div>
            </div>

        </>
    )
}

export default PlayVideo