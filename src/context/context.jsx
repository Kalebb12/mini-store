import { createContext,useEffect,useState } from "react";
export const GlobalContext = createContext(null);

const GlobalState = ({children}) => {
    const [show ,setShow] = useState(false)
    const [payment, setPayment] = useState(false)
    const  [paymentModal ,setPaymentModal] = useState(false)
    const [data ,setData] = useState([])
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
        alert("order placed")
    }

    useEffect(()=>{
        fetch("https://api.timbu.cloud/products?organization_id=ba2090f7bd0748e1a702147aef6fa1b7&Appid=288W9VW1YEE3HT6&Apikey=36dbbfb648d6472d82c8aec8fba1032b20240712130939768626")
        .then(response => response.json())
        .then(data => console.log(data))
    },[])
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