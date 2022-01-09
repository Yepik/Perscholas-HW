import './Receipt.css'
function Receipt(props) {
  
  
  return (
      <div className="Receipt">
      <h2 className="ReceiptName"><span className="ReceiptDataText">{props.receipt.person}</span></h2>
      <h3 className="ReceiptOrderMain">Main: <span className="ReceiptDataText">{props.receipt.order.main}</span></h3>
      <h3 className="ReceiptOrderProtein">
        Protein: <span className="ReceiptDataText">{props.receipt.order.protein}</span>
      </h3>
      <h3 className="ReceiptOrderRice">Rice: <span className="ReceiptDataText">{props.receipt.order.rice}</span></h3>
      <h3 className="ReceiptOrderSauce">Sauce: <span className="ReceiptDataText">{props.receipt.order.sauce}</span></h3>
      <h3 className="ReceiptOrderDrink">Drink: <span className="ReceiptDataText">{props.receipt.order.drink}</span></h3>
      <h3 className="ReceiptOrderCost">Cost: <span className="ReceiptDataText">{props.receipt.order.cost}</span></h3>
    </div>
  );
  }

export default Receipt;
