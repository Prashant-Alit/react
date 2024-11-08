import {
    Routes,
    Route,
} from "react-router-dom";

import { Home,About,Contact,Dashboard,Profile } from "../screens";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}>
              <Route path="profile" element={<Profile/>}></Route>
            </Route>
        </Routes>
    )
}