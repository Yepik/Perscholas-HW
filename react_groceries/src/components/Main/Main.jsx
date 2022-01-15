import React, { Component } from "react";
import Form from "./Form/Form";
import GroceryItem from "./GroceryList/GroceryItem";
import data from '../../Data/Data'
import PurchasedItem from "./PuchasedItem/PurchasedItem";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries:data,
      purchased:[]
    };
         
  }
  getGrocery=(grocery) =>{
    console.log(grocery.isPurchased);
    grocery.isPurchased = false;
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
  handleIsPurchased=(isPurchased,index)=> {
    const groceriesPurchased=[]
    this.setState(groceries=>{ 
      
      const grocerylist= this.state.groceries.map((grocery,indexitem)=> {
      if (index === indexitem) {
        grocery.isPurchased=isPurchased
        groceriesPurchased.push(grocery)
        return grocery
      } else {
        return grocery;
      }
    })
  return {grocerylist,}
},this.addToPurchased(groceriesPurchased))

}
handleIsPurchased1=(isPurchased,index)=> {
  const groceriesPurchased=[]
  console.log(index)
  this.setState(purchased=> {return this.state.purchased.slice(index,1) }
    
,console.log(this.state))

}

  handleOnChangeQuantity=event=>{
    this.setState({groceries: {...this.state.groceries,quantity:event.target.value}})
  }
  render() {
    return (
      <div className="Main">
        
        <Form className="Main-Form" getGrocery={this.getGrocery} />
        {this.state.groceries.map((groceryItem,index)=>{
          return groceryItem.isPurchased?<div key={index}></div>:<GroceryItem className="Main-Grocery " handleOnChangeQuantity={this.handleOnChangeQuantity} handleIsPurchased={this.handleIsPurchased}grocery={groceryItem} index={index} key={index}/>})}
      {this.state.purchased.map((groceryItem,index)=>{console.log(groceryItem[0])
          return groceryItem[0].isPurchased?<PurchasedItem className="Main-Purchased " handleOnChangeQuantity={this.handleOnChangeQuantity} handleIsPurchased={this.handleIsPurchased1}grocery={groceryItem[0]} index={index} key={index}/>:<div key={index}></div>})}
     
      </div>
    );
  }
}
export default Main;
