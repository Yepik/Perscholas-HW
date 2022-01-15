import React, { Component } from "react";
import Form from "./Form/Form";
import GroceryItem from "./GroceryList/GroceryItem";
import data from '../../Data/Data'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries:data
    };
         
  }
  getGrocery=(grocery) =>{
    console.log(grocery);
    this.setState(
      { groceries: [...this.state.groceries, grocery] },
      console.log(this.state.groceries)
    );
  }
  handleIsPurchased=event=>{
    this.setState({groceries: [...this.state.groceries,{...this.state.groceries,isPurchased:true}]})
  }
  handleOnChangeQuantity=event=>{
    this.setState({groceries: {...this.state.groceries,quantity:event.target.value}})
  }
  render() {
    return (
      <div className="Main">
        <Form getGrocery={this.getGrocery} />
        {this.state.groceries.map((groceryItem,index)=><GroceryItem  handleOnChangeQuantity={this.handleOnChangeQuantity} handleIsPurchased={this.handleIsPurchased}grocery={groceryItem} index={index} key={index}/>)}
      </div>
    );
  }
}
export default Main;
