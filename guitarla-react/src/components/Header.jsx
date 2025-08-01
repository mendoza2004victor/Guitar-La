function Header({ cart }) {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <h1>Guitar LA</h1>
      <div>
        🛒 Carrito ({totalItems})
      </div>
    </header>
  );
}

export default Header;
