import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      item: '',
      units: '',
      quantity: 0,
      isPurchased: false
    }
}
handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
    this.setState({submitted: true})
}

handleSubmit = event => {      ///    onClick ... onChange ... onSubmit
    event.preventDefault()
    console.log(this.state)
    this.props.getGrocery(this.state)
}
  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit} className="cf">
          <label htmlFor="item">Name:</label>
          <input
            id="item"
            onChange={this.handleChange}
            value={this.state.item}
            type="item"
          />

          <label htmlFor="units">Units:</label>
          <input
            id="units"
            onChange={this.handleChange}
            value={this.state.units}
            type="units"
          />

          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            onChange={this.handleChange}
            value={this.state.quantity}
            type="quantity"
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
