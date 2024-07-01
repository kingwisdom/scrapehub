import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { loginUser } from '../../store/userSlice'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../../services/AppServices'

const Login = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        // 
        setLoading(true)
        let model = {
            email, password
        }
        await LoginUser(model)
            .then((response) => {
                if (response.data.status) {
                    dispatch(loginUser(response.data.returnObj))
                    window.localStorage.setItem('user', JSON.stringify(response.data.returnObj));
                    navigation('/home')
                } else {
                    toast.error("Wrong Username / Password")
                }
            }).catch(err => {
                console.log(err)
                toast.error("There's a problem please try again")
            }).finally(() => {
                setLoading(false)
            })

    }
    return (
        <div>
            <div className="page-content">
                <div className="container">
                    <div className="account-area style-2">
                        <a href="javascript:void(0);" className="back-btn">
                            <i className="icon feather icon-arrow-left" />
                        </a>
                        <div className="section-head ps-0">
                            <h2>Login to your Account</h2>
                        </div>
                        <div className="col-12">
                            <div className>

                                <div className="card-body">

                                    <div className="mb-2 input-group input-group-icon input-mini">
                                        <span className="input-group-text">
                                            <div className="input-icon">
                                                <i className="icon feather icon-mail" />
                                            </div>
                                        </span>
                                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Email" />
                                    </div>
                                    <div className="mb-2 input-group input-group-icon input-mini">
                                        <span className="input-group-text">
                                            <div className="input-icon">
                                                <i className="icon feather icon-lock" />
                                            </div>
                                        </span>
                                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className="form-control dz-password" placeholder="Type Password Here" />
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
                    <button type="button" onClick={handleSubmit} disabled={loading} class="btn mb-2 me-2 btn-block btn-primary">{loading ? 'Loading...' : 'Login'}</button>
                </div>
            </div>
            <ToastContainer />
        </div>

    )
}

export default Login