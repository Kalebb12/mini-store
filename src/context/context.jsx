import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext(null);
const GlobalState = ({ children }) => {
  const [show, setShow] = useState(false);
  const [payment, setPayment] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [increment, setIncrement] = useState([]);
  const [loading ,setLoading] = useState(true)
  const [err, setErr] = useState(null)
  const [page,setPage] = useState(1)
  const handleOpen = () => {
    setShow(true);
    document.body.classList.add("modal-open");
  };

  const handleClose = () => {
    setShow(false);
    document.body.classList.remove("modal-open");
  };

  const handlePayment = () => {
    setPayment(true);
    document.body.classList.add("modal-open");
    console.log("payment successful");
  };

  const endPayment = () => {
    document.body.classList.remove("modal-open");
    setPayment(false);
    setPaymentModal(false);
    setIncrement([]);
    setOrder(0);
    setTotal(0);
    setCart([]);
  };

  const add = (item, num) => {
    if (num < item.available_quantity) {
      setIncrement([...increment, item]);
      setTotal(total + item.current_price[0].NGN[0]);
    }
  };

  const remove = (item, num) => {
    if (num > 1) {
      const index = increment.findIndex((x) => x.id === item.id);
      if (index > -1) {
        setIncrement(increment.filter((_, i) => i !== index));
        setTotal(total - item.current_price[0].NGN[0]);
      }
    } else {
      clearitem(item, num);
    }
  };

  const [order, setOrder] = useState(0);
  const handleOrder = (id) => {
    // add item with id to cart
    setCart([...cart, data.find((item) => item.id === id)]);
    setTotal(
      total + data.find((item) => item.id === id).current_price[0].NGN[0]
    );
    setIncrement([...increment, data.find((item) => item.id === id)]);
  };

  const added = (item) => {
    return increment.filter((x) => x.id === item.id).length;
  };

  const clearitem = (item, num) => {
    const index = increment.findIndex((x) => x.id === item.id);
    if (index > -1) {
      setIncrement(increment.filter((x) => x.id !== item.id));
      setTotal(total - item.current_price[0].NGN[0] * num);
      setCart(cart.filter((x) => x.id !== item.id));
    }
  };
  useEffect(() => {
    fetch(
      `/api/products?organization_id=ba2090f7bd0748e1a702147aef6fa1b7&page=${page}&size=9&Appid=288W9VW1YEE3HT6&Apikey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((response) => {
        if (!response.ok) {
          setLoading(false);
          throw Error("failed to connect to server...");
        } 
        else {
          setLoading(false);
          return response.json();
        }
      })
      .then((data) => {
        setData(data.items);
        setErr(null)
      })
      .catch((error) => {
        setErr(error.message);
        setLoading(false)
      });
  }, [page]);
  return (
    <GlobalContext.Provider
      value={{
        show,
        setShow,
        handleOpen,
        handleClose,
        handlePayment,
        payment,
        endPayment,
        paymentModal,
        setPaymentModal,
        order,
        handleOrder,
        data,
        setData,
        cart,
        total,
        setTotal,
        increment,
        setIncrement,
        added,
        add,
        remove,
        clearitem,
        loading,
        setLoading,
        err,
        setPage,
        page
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
