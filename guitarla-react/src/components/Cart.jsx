function Cart({ cart, incrementQuantity, decrementQuantity, removeProduct, clearCart }) {
  return (
    <aside>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
               <li key={item.id} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
    <img
      src={item.image}
      alt={item.name}
      style={{ width: '80px', height: 'auto', borderRadius: '8px' }}
    />
    <div>
      <h4>{item.name}</h4>
      <p>Precio: ${item.price}</p>
      <p>Cantidad: {item.quantity}</p>
      <div>
        <button onClick={() => incrementQuantity(item.id)}>+</button>
        <button onClick={() => decrementQuantity(item.id)}>-</button>
        <button onClick={() => removeProduct(item.id)}>Eliminar</button>
      </div>
    </div>
  </li>
            ))}
          </ul>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </aside>
  );
}

export default Cart;
