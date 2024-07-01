import React from 'react'

const OnboardInstruction = () => {
    return (
        <div>
            <div className="page-content">
                <div className="container">
                    <div className="account-area style-2">
                        <a href="javascript:void(0);" className="back-btn">
                            <i className="icon feather icon-arrow-left" />
                        </a>
                        <div className="section-head ps-0 border-bottom">
                            <h2 className="mb-2">Welcome to W3Tinder.</h2>
                            <p>Please follow these House Rules.</p>
                        </div>
                    </div>
                    <ul className="policy-content">
                        <li>
                            <h4>Be yourself.</h4>
                            <p>Make sure your photos, age , and bio are true to who are you.</p>
                        </li>
                        <li>
                            <h4>Stay safe.</h4>
                            <p>Don't be too quick to give out personal information.</p>
                        </li>
                        <li>
                            <h4>Play it cool.</h4>
                            <p>Respect others and treat them as you would like to be treated.</p>
                        </li>
                        <li>
                            <h4>Be Proactive.</h4>
                            <p>Don't be too quick to give out personal information.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <button type="button" class="btn mb-2 me-2 btn-block btn-primary m-3">Confirm</button>
            <a href="/more">continue</a>
        </div>
    )
}

export default OnboardInstruction