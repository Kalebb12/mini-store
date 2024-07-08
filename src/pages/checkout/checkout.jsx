import { useContext} from "react";
import img from "/brown-shirt.png"
import img2 from "/shirt.png"
import img3 from "/sneakers.png"
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./checkout.css"
import { GlobalContext } from "../../context/context";
import SuccessModal from "../../components/modal/success/success";
export const Checkout = () => {
    const {handlePayment,paymentModal,setPaymentModal} = useContext(GlobalContext)
  return (
    <div>
        <div className="container padding">
            <div className="checkout-container flex flex-btw gap ">
                <ul className="checkout">
                    <div className="flex flex-center checkout-arrow">
                        <Link to="/mini-store/">
                            <BiArrowBack size={28}/>
                        </Link>
                        <h3>Checkout</h3>
                    </div>
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
                </ul>
                {
                    paymentModal &&
                <div className="overlay" onClick={()=>{setPaymentModal(false)}}></div>
                }
                <div className="payment" id={paymentModal ? "slide-up":"hidden"}>
                    <h2>Payment Info</h2>


                    <div className="payment-method">
                        <p>Payment Method</p>

                        <div className="opt">
                            <input type="radio" id="credit-card" name="payment-method" style={{marginRight:5}} />
                            <label htmlFor="credit-card">Credit Card</label>
                        </div>
                        <div className="opt">
                            <input type="radio" id="paypal" name="payment-method" style={{marginRight:5}} />
                            <label htmlFor="paypal">PayPal</label>
                        </div>
                    </div>


                    <div>
                        <p>Name On Card</p>
                        <input type="text" placeholder="Enter Name...." className="text-field name"/>
                    </div>

                    <div>
                        <p>Card Number</p>
                        <input type="text" placeholder="....         ....            ....         1234" maxLength={16} className="text-field"/>
                    </div>

                    <div className="flex gap flex-btw width-control">
                        <div>
                            <p>Expiration Date</p>
                            <input type="text" className="exp-date" maxLength={8} placeholder="DD MM YYYY"/>
                        </div>
                        <div>
                            <p>CVV</p>
                            <input type="text" className="cvv" maxLength={3} placeholder="123"/>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-center">
                            <input type="checkbox" name="" id="" style={{marginRight:5}} />
                            <div style={{minWidth:399}}> 
                                <span>Send copy of payment to my email</span>
                            </div>
                        </div>
                        <button onClick={handlePayment}>pay</button>
                    </div>
                    
                </div>
            </div>
                <div className="flex flex-col gap flex-center center bottom">
                    <p>Subtotal of items in cart = N12,000</p>
                    <div className="my-btns flex flex-center gap">
                        <Link to="/mini-store/">
                            <button className="btn back-btn">Continue shopping</button>
                        </Link>
                        <Link to="/mini-store/checkout/">
                            <button className="btn checkout-btn" onClick={()=>{setPaymentModal(true)}}>Checkout</button>
                        </Link>
                    </div>
            </div>
        </div>
        <SuccessModal/>
    </div>
  )
}
