import { useContext } from "react";
import { GlobalContext } from "../../../context/context";
import "./cart.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
const CartModal = () => {
  const { show, handleClose, cart, total,remove,added,add} =
    useContext(GlobalContext);
  return (
    <div>
      {show && <div className="overlay" onClick={handleClose}></div>}
      <ul className={show ? "show" : "hidden"} id="sidenav">
        <li className="flex padding flex-center flex-btw">
          <div className="flex flex-center cart-icon">
            <BiArrowBack size={22} onClick={handleClose} />
            <h3>My Cart</h3>
          </div>
          <p>{cart.length} Items</p>
        </li>

        {cart.map((item) => {
          // get number of times an item has apppeared in cart

          let num = added(item)
          // add one more item 
  

          // remove an item 

          return (
            <li className="padding flex flex-center gap" key={item.id}>
              <img
                src={"https://api.timbu.cloud/images/" + item.photos[0].url}
                alt={item.name}
                width={70}
                height={70}
              />
              <div className="cart-item">
                <div className="flex flex-btw">
                  <p className="cart-title">{item.name}</p>
                  <p className="cart-price">
                    N{item.current_price[0].NGN[0] * num}
                  </p>
                </div>
                <p className="cart-des">promo</p>

                <div className="flex gap">
                  <button
                    className="alert bg-black"
                    onClick={() => {
                      remove(item , num);
                    }}
                  >
                    -
                  </button>
                  <p>{num}</p>
                  <button
                    className="alert bg-black"
                    onClick={() => {
                      add(item , num);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          );
        })}

        <div className="flex flex-col gap flex-center center btm">
          <p>Subtotal of items in cart = N{total}</p>
          <div className="my-btns flex flex-center gap">
            <Link to="/mini-store/">
              <button id="cnt-btn" className="white-btn" onClick={handleClose}>
                Continue shopping
              </button>
            </Link>
            <Link to="/mini-store/checkout/">
              <button className="btn checkout-btn" onClick={handleClose}>
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default CartModal;
