import "./Product.css";
import Price from "./Price.jsx";

function Product({title, idx}) {
    let oldprices = ["12,495", "9,999", "8,999", "7,999"];
    let newprices = ["10,999", "8,499", "7,499", "6,999"];
    let descriptions = [
        ["8000 DPI", "5 Programmable Buttons"],
        ["Precision and versatility", "Designed for iPad pro"],
        ["Vibrant display", "Sleek design"],
        ["Powerful performance", "Long-lasting battery"],
    ];
    return (
        <div className="Product" >
           <h4>{title}</h4>
           <p>{descriptions[idx][0]}</p>
           <p>{descriptions[idx][1]}</p>
           <Price oldPrice={oldprices[idx]} newPrice={newprices[idx]} />
        </div>
    );
}

export default Product;