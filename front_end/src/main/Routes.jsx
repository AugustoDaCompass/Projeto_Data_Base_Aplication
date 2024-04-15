import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../componentes/home/Home'
import Batalha from '../user/Batalha'
import UserCrud from '../user/UserCrud'
import Parabens from "../user/Parabens";

export default props => (
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/users" element={<UserCrud/>} />
    <Route path="/batalha" element={<Batalha/>}  />
    <Route path="/parabens" element={<Parabens/>}  />
    <Route path="*" element={<Home/>} />
    </Routes>
    

)
    