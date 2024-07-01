import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { ConfirmOtp } from '../../services/AppServices';
import { ToastContainer, toast } from 'react-toastify';

const OtpPage = () => {
    const location = useLocation()
    const { otp, email } = location.state;

    const [value, setValue] = useState("")
    const [loading, setLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    console.log(otp, email)
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (value != otp) {
            return toast.error("The OTP inputed is not correct")
        }
        setLoading(true)
        let model = { email }
        await ConfirmOtp(model).then((res) => {
            console.log(res.data)
            setIsSuccess(true)
        }).catch(err => {
            console.log(err)
            toast.error("Something went wrong")
        }).finally(() => {
            setLoading(false)
        })
    }
    return (
        <div>
            <div className="page-content">
                <div className="container">
                    {isSuccess && (<div className="alert alert-success">
                        <p>You are successfully Registered! please proceed to <a href='/login' className='btn btn-success'>login</a></p>
                    </div>)}
                    <div className="account-area style-2">
                        <a href="javascript:void(0);" className="back-btn">
                            <i className="icon feather icon-arrow-left" />
                        </a>
                        <div className="section-head ps-0 d-flex align-items-center">
                            <h2 className="me-2 mb-0">Enter your code</h2>
                            <a href="javascript:void(0);" className="badge">Resend</a>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div id="otp" >
                            <input className="form-control" onChange={(e) => setValue(e.target.value)} type="number" style={{ fontSize: 40, textAlign: 'center' }} maxLength={6} />
                        </div>

                        <div style={{ marginTop: 60 }}></div>
                        <button type="submit" class="btn mb-2 me-2 btn-block btn-primary">{loading ? 'Checking...' : 'Confirm'}</button>

                    </form>
                    <a href="/instruction">next</a>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default OtpPage