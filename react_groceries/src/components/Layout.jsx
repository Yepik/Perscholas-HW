import React, { Component } from 'react';
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class Layout extends Component{
    constructor(props){
        super(props)
        this.state={familyMember:true}
    }
    switcher=()=>{
        console.log("i was here")
                switch(this.state.familyMember){
                    case 0:{
                        return <Main name="Family Member 1"/>
                        
                    }
                    case 1:{
                        return <Main name="Family Member 2"/>
                    }
                    case 2:{
                        return <Main name="Family Member 3"/>
                    }
                }
    }
    handleChangeOption = event => {
        console.log(event.target.value)
        
    }
    handleSubmit = event=> {
        this.setState({familyMember:event.target.value},console.log(this.state.familyMember))
    }
    render() {

    return(
        <div className="Layout"> 
            <Header/>
            <select onChange={this.handleChangeOption} onSubmit={this.handleSubmit}>
                <option value={true} >Family Member 1</option>
                <option value={false} >Family Member 2</option>
                
            </select>
            {this.state.familyMember?<Main name="Family Member 1"/>:<Main name="Family Member 2"/>
            }

            <Footer/>
        </div>
    );    
        }
}
export default Layout;