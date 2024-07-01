import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import NotFound from '../pages/NotFound'
import Welcome from '../pages/Welcome'
import Home from '../pages/Home'
import Login from '../pages/auth/Login'
import PrivateRoute from '../layout/PrivateRoute'
import ImagesInfo from '../pages/auth/ImagesInfo'
import PlayVideo from '../pages/PlayVideo'
import Search from '../pages/Search'


const Router = () => {
    // const { user } = useSelector((state) => state.user)

    return (
        <Routes>
            <Route path='/' element={<Welcome />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/upload-image' element={<ImagesInfo />}></Route>

            <Route element={<PrivateRoute />}>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/search' element={<Search />}></Route>
                <Route path='/video' element={<PlayVideo />}></Route>
            </Route>
            <Route path='*' element={<NotFound />}></Route>

        </Routes>
    )
}

export default Router