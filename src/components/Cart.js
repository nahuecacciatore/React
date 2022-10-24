import { useCart } from "../context/CartContext"

const Cart = () => {

  const {products, clearCart} = useCart()
  return (
    <div>
        <div className=
          "font-bold text-4xl italic underline m-5">
          CARRITO:
        </div>
        <div className="m-5 ">
          {products.map( (p, i) => <li key={i}>{p.name}: ${p.price}</li>)}

        </div>
        <button className="btn" onClick={clearCart}>Limpiar carrito</button>
    </div>
  )
}
export default Cart