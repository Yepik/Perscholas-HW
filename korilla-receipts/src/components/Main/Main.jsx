import './Main.css'
import Receipts from '../../Data/Data'
import Receipt from '../Receipt/Receipt'
function Main(){
    randomize();
    return (
        <div className="Main">
            {Receipts.map((receipt,index) =>{
                // console.log(receipt.paid)
               return receipt.paid?<div></div>:
             <Receipt receipt={receipt} key={index} />
        })}

        </div>
    );
}
function randomize(){
    Receipts.map((receipt,index) =>{
        
        receipt.paid=Math.random() < 0.5
    })
}
export default Main;