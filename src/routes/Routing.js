import {
    Routes,
    Route,
} from "react-router-dom";

import { Home,About,Contact,Post,Profile } from "../screens";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}>
            <Route path="profile" element={<Profile/>}></Route>
            </Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/post" element={<Post/>}>
              
            </Route>
        </Routes>
    )
}