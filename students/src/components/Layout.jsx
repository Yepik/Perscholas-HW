import React, { useState } from 'react';
import './Layout.css'
import Main from "./Main/Main";
import Header from "./Header/Header";
function Layout(props){
    return (
        <div className="Layout">
            <Header/>
            <Main studentData={props.studentData}/>
        </div>
    );

}
export default Layout;