import React, { Component }from "react";

class GroceryItem extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.grocery
    }
   handleIsPurchased = (event)=>{
    event.preventDefault();
    this.props.handleIsPurchased(this.state,this.props.index)
   }
   handleOnChangeQuantity = (event)=>{
        this.setState({ [event.target.id]: event.target.value })
        
   }
   
render() {
    
    return(
        <div className="GroceryItem">
            {this.props.grocery.isPurchased?<></>:<ul>
                <li>{this.props.grocery.item}</li>
                <li>{this.props.grocery.units}</li>
                <li>{this.props.grocery.quantity}</li>
            </ul>}
            <form action="" onSubmit={this.handleIsPurchased}>
            <input type="text" id="quantity"pattern="[0-9]*" onChange={this.handleOnChangeQuantity}
         value={this.state.quantity} />
            <button className="isPruchase" >Buy</button>
            </form>
            
        </div>
    )
}
}
export default GroceryItem;