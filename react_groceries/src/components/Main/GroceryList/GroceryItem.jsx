import React, { Component }from "react";

class GroceryItem extends React.Component {
   handleIsPurchased = ()=>{

   }
   
render() {
    console.log(this)
    return(
        <div className="GroceryItem">
            {this.props.grocery.isPurchased?<></>:<ul>
                <li>{this.props.grocery.item}</li>
                <li>{this.props.grocery.units}</li>
                <li>{this.props.grocery.quantity}</li>
            </ul>}
            <form action="" onSubmit={this.handleIsPurchased}>
            <input type="text" id="quantity"pattern="[0-9]*" onChange={this.props.handleOnChangeQuantity}
         value={this.props.grocery.quantity} />
            <button className="isPruchase" >Buy</button>
            </form>
            
        </div>
    )
}
}
export default GroceryItem;