import React, { useState } from 'react';
import './Layout.css'
import Main from "./Main/Main";
import Header from "./Header/Header";
function Layout(){
    return (
        <div className="Layout">
            <Header/>
            <Main/>
        </div>
    );

}
export default Layout;