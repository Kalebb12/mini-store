import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./checkout.css";
import { GlobalContext } from "../../context/context";
import SuccessModal from "../../components/modal/success/success";
export const Checkout = () => {
  const { handlePayment, paymentModal, setPaymentModal } =
    useContext(GlobalContext);
  const { added, cart, total, remove, add ,clearitem } = useContext(GlobalContext);
  return (
    <div>
      <div className="container center padding">
        <div className="checkout-container flex flex-btw gap ">
          <ul className="checkout">
            <div className="flex flex-center checkout-arrow">
              <Link to="/">
                <BiArrowBack size={28} />
              </Link>
              <h3>Checkout</h3>
            </div>
            {cart.map((item) => {
              const num = added(item);
              return (
                <li
                  className="padding flex flex-center gap list-item"
                  key={item.id}
                >
                  <img
                    src={"https://api.timbu.cloud/images/" + item.photos[0].url}
                    alt=""
                    width={70}
                    height={70}
                  />
                  <div className="cart-item">
                    <div className="flex flex-btw">
                      <p className="cart-title">{item.name + " X " + num}</p>
                      <p className="cart-price">
                        {item.current_price[0].NGN[0] * num}
                      </p>
                    </div>
                    <div className="flex flex-btw mt">
                    <div className="flex gap ">
                      <button
                        className="alert bg-black"
                        onClick={() => {
                          remove(item, num);
                        }}
                      >
                        -
                      </button>
                      <p>{num}</p>
                      <button
                        className="alert bg-black"
                        onClick={() => {
                          add(item, num);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <p className="remove" onClick={()=>clearitem(item , num)}>Remove</p>
                    </div>
                  </div>
                </li>
              );
            })}

            <div className="flex flex-btw padding gone">
              <p className="bold">Total</p>
              <span>{total}</span>
            </div>
          </ul>
          {paymentModal && (
            <div
              className="overlay"
              onClick={() => {
                setPaymentModal(false);
              }}
            ></div>
          )}
          <div className="payment" id={paymentModal ? "slide-up" : "hidden"}>
            <h2>Payment Info</h2>

            <div className="payment-method">
              <p>Payment Method</p>

              <div className="opt">
                <input
                  type="radio"
                  id="credit-card"
                  name="payment-method"
                  style={{ marginRight: 5 }}
                />
                <label htmlFor="credit-card">Credit Card</label>
              </div>
              <div className="opt">
                <input
                  type="radio"
                  id="paypal"
                  name="payment-method"
                  style={{ marginRight: 5 }}
                />
                <label htmlFor="paypal">PayPal</label>
              </div>
            </div>

            <div>
              <p>Name On Card</p>
              <input
                type="text"
                placeholder="Enter Name...."
                className="text-field name"
              />
            </div>

            <div>
              <p>Card Number</p>
              <input
                type="text"
                placeholder="....         ....            ....         1234"
                maxLength={16}
                className="text-field"
              />
            </div>

            <div className="flex gap flex-btw width-control">
              <div>
                <p>Expiration Date</p>
                <input
                  type="text"
                  className="exp-date"
                  maxLength={8}
                  placeholder="DD MM YYYY"
                />
              </div>
              <div>
                <p>CVV</p>
                <input
                  type="text"
                  className="cvv"
                  maxLength={3}
                  placeholder="123"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  style={{ marginRight: 5 }}
                />
                <div style={{ minWidth: 399 }}>
                  <span>Send copy of payment to my email</span>
                </div>
              </div>
              <button onClick={handlePayment} className="white-btn">
                pay
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap flex-center center bottom">
        <p>Subtotal of items in cart = N{total}</p>
        <div className="my-btns flex flex-center gap">
          <Link to="/">
            <button className="btn back-btn">Continue shopping</button>
          </Link>
          <Link to="/checkout/">
            <button
              className="btn checkout-btn"
              onClick={() => {
                setPaymentModal(true);
              }}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
      <SuccessModal />
    </div>
  );
};
