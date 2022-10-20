import { useCart } from "../context/CartContext"

const Cart = () => {

  const {products, clearCart} = useCart()

  return (
    <div>
        <div>carrito</div>
        {products.map( (p, i) => <li key={i}>{p.name}</li>)}
    </div>
  )
}
export default Cart