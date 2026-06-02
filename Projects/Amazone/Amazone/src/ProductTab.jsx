import Product from "./Product";

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    }
    return (
        <div style={styles}>
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple pencil (2nd Gen)" idx={1} />
            <Product title="Samsung Galaxy Tab" idx={2} />
            <Product title="Microsoft Surface Pro" idx={3} />
        </div>
    );
}

export default ProductTab;
