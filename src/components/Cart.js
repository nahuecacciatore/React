import { useCart } from "../context/CartContext"

const Cart = () => {

  const {products, clearCart} = useCart()
  return (
    <div>
        <div>carrito</div>
        {products.map( (p, i) => <li key={i}>{p.name}: {p.price}</li>)}
        <button className="btn" onClick={clearCart}>Limpiar carrito</button>
    </div>
  )
}
export default Cart