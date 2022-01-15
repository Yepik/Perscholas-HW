import React, { Component} from 'react';
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

function Layout(props) {
    return(
        <div className="Layout"> 
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );    
}
export default Layout;