import { FiMenu } from "react-icons/fi"
import "./styles.css"
import { IoCartOutline } from "react-icons/io5"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { PiShoppingCart } from "react-icons/pi"
import { GlobalContext } from "../../context/context"
const Navbar = () => {
    const {handleOpen,handleClose} = useContext(GlobalContext)
  return (
    <div>
        <header className="padding">
            <div className="container center">
                <div className="flex flex-center flex-btw">
                    <h2 className="no-wrap nav-title">No.1 Thrift</h2>
                    
                    <div className="mobile menu-icon" onClick={handleOpen}>
                        <FiMenu size={20}/>
                    </div>
                    
                    <ul className=" navs gap desktop">
                        <li><button className="btn bg-white">Home</button></li>
                        <li><button className="btn bg-white">Products</button></li>
                        <li><button className="btn bg-white">FAQS</button></li>
                        <li><button className="btn bg-white">Contacts</button></li>
                    </ul>
                    <ul className=" navs gap desktop">
                        <li><button className="btn bg-white cart" onClick={handleOpen}><PiShoppingCart size={20} fill="#003CD6"/></button></li>
                        <li><button className="btn bg-black">Order now</button></li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar