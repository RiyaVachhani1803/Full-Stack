import "./Product.css";

function Product({ title, price = 1, features , features2 = {} }) {
    let styles ={backgroundColor: price > 50000 ? "lightpink" : "lightblue"};
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <p>Price: {price}</p>
            <p>{features}</p>
            <p>{features2.a}</p>
            {/* <p>{features.map((feature) => <li>{feature}</li>)}</p> */}
            {price > 50000 ? <p>Discount of 5%</p>: null}
            {/* {price > 50000 && <p>Discount of 5%</p>} */}

        </div>
    );
}

export default Product;