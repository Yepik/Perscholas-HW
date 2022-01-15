import React, { Component } from "react";
import Form from "./Form/Form";
import GroceryItem from "./GroceryList/GroceryItem";
import data from '../../Data/Data'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries:data,
      purchased:[]
    };
         
  }
  getGrocery=(grocery) =>{
    console.log(grocery);
    this.setState(
      { groceries: [...this.state.groceries, grocery] }
    );
  }
  addToPurchased(grocery) {
    console.log(grocery);
    this.setState(
      { purchased: [...this.state.purchased, grocery] },
      console.log(this.state)
    );
  }
  handleIsPurchased=(groceryItem,index)=> {
    this.setState(groceries=>{ const grocerylist= this.state.groceries.map((grocery,indexitem)=> {
      if (index === indexitem) {
        grocery.isPurchased=true
        return grocery
      } else {
        return grocery;
      }
    })
  return grocerylist
},console.log(this.state.groceries))}
    
  
   

onUpdateItem = i => {
  this.setState(state => {
    const list = state.list.map((item, j) => {
      if (j === i) {
        return item + 1;
      } else {
        return item;
      }
    });

    return {
      list,
    };
  });
};
  handleOnChangeQuantity=event=>{
    this.setState({groceries: {...this.state.groceries,quantity:event.target.value}})
  }
  render() {
    return (
      <div className="Main">
        <Form getGrocery={this.getGrocery} />
        {this.state.groceries.map((groceryItem,index)=>{
          return groceryItem.isPurchased?<div key={index}></div>:<GroceryItem  handleOnChangeQuantity={this.handleOnChangeQuantity} handleIsPurchased={this.handleIsPurchased}grocery={groceryItem} index={index} key={index}/>})}
      </div>
    );
  }
}
export default Main;
