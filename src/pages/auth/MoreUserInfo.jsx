import React from 'react'

const MoreUserInfo = () => {
    return (
        <div>
            <div className="page-content">
                <div className="container">
                    <div className="account-area style-2">
                        <a href="javascript:void(0);" className="back-btn">
                            <i className="icon feather icon-arrow-left" />
                        </a>
                        <div className="section-head ps-0 border-bottom">
                            <p>Please fill the following information correctly.</p>
                        </div>
                    </div>
                    <div>
                        <div className="section-head ps-0">
                            <h5>Enter your age?</h5>
                        </div>
                        <div class="mb-0 input-group input-mini">
                            <input type="number" className="form-control" />
                        </div>
                    </div>

                    <div className="section-head ps-0">
                        <h5>Your Sex?</h5>
                    </div>
                    <div className="radio style-3">
                        <label className="radio-label">
                            <input type="radio" defaultChecked="checked" name="radio2" />
                            <span className="checkmark">
                                <span className="text">Women</span>
                            </span>
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="radio2" />
                            <span className="checkmark">
                                <span className="text">Men</span>
                            </span>
                        </label>

                    </div>

                    {/* intested in seeing */}
                    <div className="section-head ps-0">
                        <h5>Who are you intrested in seeing?</h5>
                    </div>
                    <div className="radio style-3">
                        <label className="radio-label">
                            <input type="radio" defaultChecked="checked" name="radio3" />
                            <span className="checkmark">
                                <span className="text">Women</span>
                            </span>
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="radio3" />
                            <span className="checkmark">
                                <span className="text">Men</span>
                            </span>
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="radio3" />
                            <span className="checkmark">
                                <span className="text">Everyone</span>
                            </span>
                        </label>
                    </div>

                    {/* looking for */}
                    <div className="section-head ps-0">
                        <h5>What are you looking for right now?</h5>
                    </div>
                    <select className='form-control'>
                        <option>Marriage</option>
                        <option>Long-term partner</option>
                        <option>Long-term open to short</option>
                        <option>Short term</option>
                        <option>Friend</option>
                    </select>
                    {/* looking for */}
                    <div className="section-head ps-0">
                        <h5>Bio?</h5>
                        <small>Short description about yourself</small>
                    </div>
                    <textarea cols="30" className='form-control' rows="10"></textarea>

                </div>
            </div>
            <button type="button" className="btn mb-2 me-2 btn-block btn-secondary m-3">Confirm</button>
            <a href="/upload-image">upload</a>
        </div>
    )
}

export default MoreUserInfo