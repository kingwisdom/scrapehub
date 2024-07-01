import React, { useState } from 'react'
import { GetSearchedPHVideos, GetSearchedRedtubeVideos, GetSearchedXVideos, GetSearchedXXVideos, GetVideos } from '../services/AppServices'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const nav = useNavigate()

    const [search, setSearch] = useState("")
    const [combinedResults, setCombinedResults] = useState([]);
    const [loadSearch, setLoadSearch] = useState(false)
    const handleSearch = async () => {
        setLoadSearch(true)
        try {
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
            console.error("Error fetching videos:", error);
        }


    };

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
                <input className="form-control my-2 mx-2" onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Please search for any video' />
                <button className='btn btn-block btn-secondary my-2 mx-2' onClick={handleSearch}>{loadSearch ? 'Searching...' : 'Search'}</button>
                <hr />
                <div className="container pt-0">
                    <small>{combinedResults.length} results</small>
                    <div className="row g-2">
                        <>
                            {combinedResults?.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <div className="dz-media-card style-5" onClick={() => {
                                        nav("/video", {
                                            state: { item }
                                        })
                                    }}>

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


                    </div>
                </div>
            </div>


        </>
    )
}

export default Search