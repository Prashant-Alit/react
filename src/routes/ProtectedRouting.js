import { Navigate, Outlet, Routes,Route } from 'react-router-dom'

import { Post } from '../screens';

export const Protected = () => {
    
    const formdata = JSON.parse(localStorage.getItem('items'));
    console.log(formdata)
    return (
        formdata ? <Outlet /> : <Navigate to='/contact' />
    )
}

export const ProtectedRouting = () => {
    return (
        <Routes>
            <Route element={<Protected />}>
                <Route path='/post' element={<Post />} />
            </Route>
        </Routes>
    )
}