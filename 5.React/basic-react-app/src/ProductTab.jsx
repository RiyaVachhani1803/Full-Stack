import Product from "./Product";

function ProductTab() {
    // let options = ["hi-tech", "durable", "fast"];
    let options = [<li>hi-tech</li>, <li>durable</li>, <li>fast</li>];
    let options2 = { a: "hi-tech", b: "durable", c: "fast" };

    return (
        <>
            <Product title="Phone" price={50000} features={options} features2={options2}/>
            <Product title="Laptop" price={1000000} features={["lightweight", "portable"]} />
            <Product title="Pen" features2={{ a: "lightweight", b: "portable" }} />
        </>
    );
}

export default ProductTab;