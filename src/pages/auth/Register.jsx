import React, { useState } from 'react'
import { RegisterUser } from '../../services/AppServices'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const nav = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        await RegisterUser(data).then((response) => {
            console.log(response.data.returnObj)
            if (response.data.status) {
                nav('/otp', {
                    state: {
                        otp: response.data.returnObj.otp,
                        email: data.email
                    }
                })
            }
        }).catch(err => {
            // console.log(err)
            toast.error(err.response.data.message)
        }).finally(() => setLoading(false))
    }

    return (
        <div>
            <div className="page-content">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="account-area style-2">
                            <a href="javascript:void(0);" className="back-btn">
                                <i className="icon feather icon-arrow-left" />
                            </a>
                            <div className="section-head ps-0">
                                <h2>Register your Account</h2>
                            </div>
                            <div className="col-12">
                                <div className>
                                    <div className="card-body">
                                        <div className="mb-2 input-group input-group-icon input-mini">
                                            <span className="input-group-text">
                                                <div className="input-icon">
                                                    <i className="icon feather icon-user" />
                                                </div>
                                            </span>
                                            <input type="text" name="name" value={data.name} onChange={handleChange} className="form-control" placeholder="Enter Name" />
                                        </div>
                                        <div className="mb-2 input-group input-group-icon input-mini">
                                            <span className="input-group-text">
                                                <div className="input-icon">
                                                    <i className="icon feather icon-mail" />
                                                </div>
                                            </span>
                                            <input type="email" name="email" value={data.email} onChange={handleChange} className="form-control" placeholder="Enter Email" />
                                        </div>
                                        <div className="mb-2 input-group input-group-icon input-mini">
                                            <span className="input-group-text">
                                                <div className="input-icon">
                                                    <i className="icon feather icon-lock" />
                                                </div>
                                            </span>
                                            <input type="password" id="password" name="password" value={data.password} onChange={handleChange} className="form-control dz-password" placeholder="Type Password Here" />
                                            <span className="input-group-text show-pass">
                                                <i className="icon feather icon-eye-off eye-close" />
                                                <i className="icon feather icon-eye eye-open" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: 60 }}></div>

                        <button type="submit" disabled={loading} class="btn mb-2 me-2 btn-block btn-primary">{loading ? 'Loading...' : 'Register'}</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>

    )
}

export default Register