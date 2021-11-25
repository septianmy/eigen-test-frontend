import React from 'react';
import { BrowserRouter,
    Routes,
    Route} from 'react-router-dom';
import {Home, Detail} from '../../pages';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/detail/:id" element={<Detail />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing