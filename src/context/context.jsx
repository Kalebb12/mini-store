import { createContext,useState } from "react";
export const GlobalContext = createContext(null);

const GlobalState = ({children}) => {
    const [show ,setShow] = useState(false)
    const [payment, setPayment] = useState(false)
    const  [paymentModal ,setPaymentModal] = useState(false)
    const handleOpen = ()=>{
        setShow(true)
        document.body.classList.add("modal-open")
    }

    const handleClose = ()=>{
        setShow(false)
        document.body.classList.remove("modal-open")
    }

    const handlePayment =()=>{
        setPayment(true)
        document.body.classList.add("modal-open")
        console.log("payment successful")
    }

    const endPayment = () =>{
        document.body.classList.remove("modal-open")
        setPayment(false)
        setPaymentModal(false)
        setOrder(0)
    }

    const [order, setOrder] = useState(0)
    const handleOrder = ()=>{
        setOrder(order+1)
        alert("order placed")
    }
    return (
        <GlobalContext.Provider value={{
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
            handleOrder
            
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;