const ProductList = ({ products }) => {
  const handleAddToCart = (product) => {
    console.log(product.name + " added to cart");
  };
  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Product List</h2>
      <ul>List of products</ul>
      {products.map((product) => {
        return (
          <>
            <li style={{ listStyle: "none", marginBottom: "10px" }}>
              {product.name} - ${product.price}
              <button
                style={{
                  marginLeft: "10px",
                }}
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart
              </button>
            </li>
          </>
        );
      })}
    </div>
  );
};

export default ProductList;
