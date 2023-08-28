import { useState } from "react";

const Cart = ({ count, setCount, cartButton }) => {
  const [add, setAdd] = useState(false);

  return (
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div className="text-center">
        {cartButton === "Add to cart" ?
          (<a href="#" className="btn btn-outline-dark mt-auto"
            onClick={() => { setCount(add ? count - 1 : count + 1); setAdd(!add) }}>
            {add ? "Remove from " : " Add to "} cart </a>) :
          (<a href="#" className="btn btn-outline-dark mt-auto">View Options</a>)}
      </div>
    </div>
  );
}
export default Cart;