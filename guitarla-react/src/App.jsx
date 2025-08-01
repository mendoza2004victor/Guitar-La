import { useState } from 'react'
import Header from './components/Header'
import Guitar from './components/Guitar'
import Cart from './components/Cart'
import guitars from './data/guitars'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id)

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const incrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decrementQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <>
      <Header cart={cart} />
      <main>
  <div className="guitar-grid">
    {guitars.map((guitar) => (
      <Guitar
        key={guitar.id}
        product={guitar}
        addToCart={addToCart}
      />
    ))}
  </div>
  <Cart
    cart={cart}
    incrementQuantity={incrementQuantity}
    decrementQuantity={decrementQuantity}
    removeProduct={removeProduct}
    clearCart={clearCart}
  />
</main>
    </>
  )
}

export default App
