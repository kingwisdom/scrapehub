import React from 'react'

const ImagesInfo = () => {
    return (
        <div className="page-content p-b70">
            <div className="container">
                <div className="account-area style-2">
                    <a href="javascript:void(0);" className="back-btn">
                        <i className="icon feather icon-arrow-left" />
                    </a>
                    <div className="section-head ps-0">
                        <h2>Add your recent pics</h2>
                        <p>Upload 2 photos to start. Add 4 or more to make your profile stand out.</p>
                    </div>
                    <div className="row g-3" data-masonry="{&quot;percentPosition&quot;: true }">
                        <div className="col-4">
                            <div className="dz-drop-box style-2">
                                <img src="/assets/images/drop-bx2.png" alt="" />
                                <div className="drop-bx">
                                    <div className="imagePreview active" style={{ backgroundImage: 'url(/assets/images/drop-bx2.png)' }}>
                                        <label htmlFor="imageUpload" className="add-btn">
                                            <i className="icon feather icon-plus" />
                                        </label>
                                        <div className="remove-img remove-btn">
                                            <i className="icon feather icon-x" />
                                        </div>
                                        <input type="file" className="form-control d-none imageUpload" id="imageUpload" accept=".png, .jpg, .jpeg" />
                                        <label htmlFor="imageUpload" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dz-drop-box style-2">
                                <img src="/assets/images/drop-bx2.png" alt="" />
                                <div className="drop-bx">
                                    <div className="imagePreview" style={{ backgroundImage: 'url(/assets/images/drop-bx2.png)' }}>
                                        <label htmlFor="imageUpload" className="add-btn">
                                            <i className="icon feather icon-plus" />
                                        </label>
                                        <div className="remove-img remove-btn">
                                            <i className="icon feather icon-x" />
                                        </div>
                                        <input type="file" className="form-control d-none imageUpload" id="imageUpload2" accept=".png, .jpg, .jpeg" />
                                        <label htmlFor="imageUpload2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dz-drop-box style-2">
                                <img src="/assets/images/drop-bx2.png" alt="" />
                                <div className="drop-bx">
                                    <div className="imagePreview" style={{ backgroundImage: 'url(/assets/images/drop-bx2.png)' }}>
                                        <label htmlFor="imageUpload" className="add-btn">
                                            <i className="icon feather icon-plus" />
                                        </label>
                                        <div className="remove-img remove-btn">
                                            <i className="icon feather icon-x" />
                                        </div>
                                        <input type="file" className="form-control d-none imageUpload" id="imageUpload3" accept=".png, .jpg, .jpeg" />
                                        <label htmlFor="imageUpload3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dz-drop-box style-2">
                                <img src="/assets/images/drop-bx2.png" alt="" />
                                <div className="drop-bx">
                                    <div className="imagePreview" style={{ backgroundImage: 'url(/assets/images/drop-bx2.png)' }}>
                                        <label htmlFor="imageUpload" className="add-btn">
                                            <i className="icon feather icon-plus" />
                                        </label>
                                        <div className="remove-img remove-btn">
                                            <i className="icon feather icon-x" />
                                        </div>
                                        <input type="file" className="form-control d-none imageUpload" id="imageUpload4" accept=".png, .jpg, .jpeg" />
                                        <label htmlFor="imageUpload4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dz-drop-box style-2">
                                <img src="/assets/images/drop-bx2.png" alt="" />
                                <div className="drop-bx">
                                    <div className="imagePreview" style={{ backgroundImage: 'url(/assets/images/drop-bx2.png)' }}>
                                        <label htmlFor="imageUpload" className="add-btn">
                                            <i className="icon feather icon-plus" />
                                        </label>
                                        <div className="remove-img remove-btn">
                                            <i className="icon feather icon-x" />
                                        </div>
                                        <input type="file" className="form-control d-none imageUpload" id="imageUpload5" accept=".png, .jpg, .jpeg" />
                                        <label htmlFor="imageUpload5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dz-drop-box style-2">
                                <img src="/assets/images/drop-bx2.png" alt="" />
                                <div className="drop-bx">
                                    <div className="imagePreview" style={{ backgroundImage: 'url(/assets/images/drop-bx2.png)' }}>
                                        <label htmlFor="imageUpload" className="add-btn">
                                            <i className="icon feather icon-plus" />
                                        </label>
                                        <div className="remove-img remove-btn">
                                            <i className="icon feather icon-x" />
                                        </div>
                                        <input type="file" className="form-control d-none imageUpload" id="imageUpload6" accept=".png, .jpg, .jpeg" />
                                        <label htmlFor="imageUpload6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn mb-2 me-2 btn-block btn-secondary m-3">Upload</button>
            </div>
        </div>
    )
}

export default ImagesInfo