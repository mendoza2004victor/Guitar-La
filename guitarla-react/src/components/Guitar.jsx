function Guitar({ product, addToCart }) {
  return (
    <div className="guitar">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
}

export default Guitar;
