import "./ProductCard.css"

type ProductInfo = {
    name: string,
    price: number
};


function ProductCard(props: ProductInfo) {
    return(
        <div className="product-card">
            {/* Display product name */}
            <h2 className="product-name">{props.name}</h2>
            {/* Display product price, formatted as currency */}
            <p className="product-price">${props.price.toFixed(2)}</p>
        </div>
    );
}

export default ProductCard