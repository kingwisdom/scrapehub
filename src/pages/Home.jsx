import React, { useEffect, useState } from 'react'
import { GetMoreVideos, GetSearchedPHVideos, GetSearchedRedtubeVideos, GetSearchedXVideos, GetSearchedXXVideos, GetVideos } from '../services/AppServices'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Home = () => {
    const nav = useNavigate()
    useEffect(() => {
        getEncounter()
        getMoreEncounter()
    }, [])
    const [connections, setConnections] = useState([])
    const [moreConnections, setMoreConnections] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)

    const getEncounter = async () => {
        setLoading(true)
        await GetVideos().then(response => {
            // console.log(response.data)
            if (response.data.success) {
                setConnections(response?.data.data)
            }
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    }
    const getMoreEncounter = async () => {
        setLoading(true)
        await GetMoreVideos().then(response => {
            // console.log(response.data)
            if (response.data.success) {
                setMoreConnections(response?.data.data)
            }
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    }
    //https://lust.scathach.id/pornhub/related?id=ph63c4e1dc48fe7
    //https://lust.scathach.id/pornhub/search?key=milf&page=2&sort=mr
    //https://lust.scathach.id/youporn/search?key=teen&page=2

    const [combinedResults, setCombinedResults] = useState([]);
    const [loadSearch, setLoadSearch] = useState(false)
    const handleSearch = async () => {
        setLoadSearch(true)
        try {

            // const [phVideos, xVideos, xxVideos, redtubeVideos] = await Promise.all([
            //     GetSearchedPHVideos(search),
            //     GetSearchedXVideos(search),
            //     GetSearchedXXVideos(search),
            //     GetSearchedRedtubeVideos(search)
            // ]);
            // const combinedResults = [
            //     ...phVideos.data.data,
            //     ...xVideos.data.data,
            //     ...xxVideos.data.data,
            //     ...redtubeVideos.data.data
            // ];

            // setCombinedResults(combinedResults);

            const results = await Promise.allSettled([
                GetSearchedPHVideos(search),
                GetSearchedXVideos(search),
                GetSearchedXXVideos(search),
                GetSearchedRedtubeVideos(search)
            ]);
            const combinedResults = results
                .filter(result => result.status === 'fulfilled')
                .flatMap(result => result.value.data.data);

            setCombinedResults(combinedResults);
            setLoadSearch(false)
            // console.log(combinedResults);
        } catch (error) {
            setLoadSearch(false)
            toast.error("something went wrong")
            console.error("Error fetching videos:", error);
        }


    };

    if (loading) {
        return (
            <p style={{ textAlign: 'center', alignItems: 'center' }}>Loading...</p>
        )
    }
    return (
        <>
            <header className="header bg-white header-fixed border-0 style-2">
                <div className="container">
                    <div className="header-content">
                        {/* <div className="left-content style-2">
                            <a href="#" className="menu-toggler icon-fill">
                                <i className="icon feather icon-grid" />
                            </a>
                        </div> */}
                        <div className="mid-content">
                            <h5 className="title">Encounters</h5>
                        </div>
                        <div className="right-content d-flex gap-2">
                            <a href="javascript:void(0);" className="filter-icon icon-fill" data-bs-toggle="offcanvas" data-bs-target="#settingCanvas" aria-controls="offcanvasBottom">
                                {/* <i className="flaticon flaticon-settings-sliders" /> */}
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* main content */}

            <div className="page-content space-top p-b70">
                <input className="form-control" onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Please search for any video' />
                <button className='btn btn-block btn-outline-primary btn-sm my-2 mx-2' onClick={handleSearch}>{loadSearch ? 'Searching...' : 'Search'}</button>
                <hr />
                <div className="container pt-0">
                    <div className="row g-2">
                        {combinedResults?.length > 0 ? (
                            <>
                                {combinedResults?.map((item, index) => (
                                    <div className="col-6" key={index}>
                                        <a data-toggle="modal" data-target={`#itemModalLong${index}`}>
                                            <div className="dz-media-card style-5">
                                                {/* <div className="dz-media-card style-5" onClick={() => {
                                            nav("/video", {
                                                state: { item }
                                            })
                                        }}> */}
                                                {/* <i className="flaticon flaticon-play" /> */}

                                                <a className="dz-media" style={{ position: 'relative' }}>
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
                                        </a>
                                        <div className="modal fade" id={`itemModalLong${index}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLongTitle">{item?.title?.substring(0, 60)}</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="col-12">
                                                            {/* <iframe src={item?.video} frameborder="0" width="100%" height="315"></iframe> */}
                                                            <iframe id="" width="100%" height="350"
                                                                src={item?.video} frameborder="0" allowfullscreen>
                                                            </iframe>
                                                            <a className='text-center' href={item?.video} target='_blank'>if not played, Play here</a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>))}
                            </>
                        ) : (
                            <>
                                {connections?.map((item, index) => (
                                    <div className="col-6" key={index}>
                                        <div className="dz-media-card style-5" onClick={() => {
                                            nav("/video", {
                                                state: { item }
                                            })
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
                                {moreConnections?.map((item, index) => (
                                    <div className="col-6" key={index}>
                                        <div className="dz-media-card style-5" onClick={() => {
                                            nav("/video", {
                                                state: { item }
                                            })
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
                            </>
                        )}


                    </div>
                </div>
            </div>





            <div className="offcanvas offcanvas-bottom container p-0" tabIndex={-1} id="settingCanvas">
                <button type="button" className="btn-close drage-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                <div className="offcanvas-header share-style m-0">
                    <h4 className="title mb-0">Filter</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark" /></button>
                </div>
                <div className="offcanvas-body">
                    <div className="show-me mb-3">
                        <h6 className="title">Show Me</h6>

                        <select className='form-control' id="">
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Everyone">Everyone</option>
                        </select>

                    </div>
                    <div className="dz-slider">
                        <div className="slider-head">
                            <h6 className="title mb-0">Age</h6>

                        </div>
                        <div className="slider-body">
                            <div className="range-slider style-1 w-100">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="dz-stepper border-1 rounded-stepper">
                                            <small>From age</small>
                                            <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">

                                                <input className="stepper form-control" type="number" defaultValue={20} name="demo3" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="dz-stepper border-1 rounded-stepper">
                                            <small>To age</small>
                                            <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">

                                                <input className="stepper form-control" type="number" defaultValue={20} name="demo3" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="#" className="btn btn-primary w-100 rounded-xl">Apply</a>
                </div>
            </div>
            {/*  Setting OffCanvas */}
            <ToastContainer />
        </>
    )
}

export default Home