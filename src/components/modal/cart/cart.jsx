import { useContext } from "react";
import { GlobalContext } from "../../../context/context";
import img from "/brown-shirt.png"
import img2 from "/shirt.png"
import img3 from "/sneakers.png"
import "./cart.css"
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
const CartModal = () => {
    const {show ,handleClose} = useContext(GlobalContext)
    return (
        <div>
            {show &&
            <div className="overlay" onClick={handleClose}>
            </div>}
            <ul className={show ? "show":"hidden"} id="sidenav">
                <li className="flex padding flex-center flex-btw">
                    <div className="flex flex-center cart-icon">
                        <BiArrowBack size={22} onClick={handleClose}/>
                        <h3>My Cart</h3>
                    </div>
                    <p>3 Items</p>
                </li>
                

                {/* 2nd row  */}
                <li className="padding flex flex-center gap">
                    <img src={img} alt="" width={70} height={70} />
                    <div className="cart-item">
                        <div className="flex flex-btw">
                            <p className="cart-title">Brown zip Up hoodie</p>
                            <p className="cart-price">N5000</p>
                        </div>
                        <p className="cart-des">promo</p>
                        <p className="remove">Remove</p>
                    </div>
                </li>
                {/* 2nd row  */}
                <li className="padding flex flex-center gap">
                    <img src={img2} alt="" width={70} height={70} />
                    <div className="cart-item">
                        <div className="flex flex-btw">
                            <p className="cart-title">White hoodie</p>
                            <p className="cart-price">N4500</p>
                        </div>
                        <p className="cart-des">promo</p>
                        <p className="remove">Remove</p>
                    </div>
                </li>
                {/* 2nd row  */}
                <li className="padding flex flex-center gap">
                    <img src={img3} alt="" width={70} height={70} />
                    <div className="cart-item">
                        <div className="flex flex-btw">
                            <p className="cart-title">Classic Nike sneakers </p>
                            <p className="cart-price">N2500</p>
                        </div>
                        <p className="cart-des">promo</p>
                        <p className="remove">Remove</p>
                    </div>
                </li>

                <div className="flex flex-col gap flex-center center btm">
                    <p>Subtotal of items in cart = N12,000</p>
                    <div className="my-btns flex flex-center gap">
                        <Link to="/mini-store/">
                            <button id="cnt-btn" onClick={handleClose}>Continue shopping</button>
                        </Link>
                        <Link to="/mini-store/checkout/">
                            <button className="btn checkout-btn" onClick={handleClose}>Checkout</button>
                        </Link>
                    </div>
                </div>
            </ul>
        </div>
    );
}
 
export default CartModal;