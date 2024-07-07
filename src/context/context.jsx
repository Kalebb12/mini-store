import { createContext,useState } from "react";
export const GlobalContext = createContext(null);

const GlobalState = ({children}) => {
    const [show ,setShow] = useState(false)

    const handleOpen = ()=>{
        setShow(true)
        document.body.classList.add("modal-open")
    }
    const handleClose = ()=>{
        setShow(false)
        document.body.classList.remove("modal-open")
    }
    
    return (
        <GlobalContext.Provider value={{
            show,
            setShow,
            handleOpen,
            handleClose
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;