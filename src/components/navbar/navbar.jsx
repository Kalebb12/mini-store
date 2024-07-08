import { FiMenu, FiSearch } from "react-icons/fi"
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
        <header className="" id="top">
            <div className="container center padding">
                <div className="flex flex-center flex-btw ">
                    <Link to="/mini-store/">
                        <h2 className="no-wrap nav-title">No.1 Thrift</h2>
                    </Link>
                    
                    <ul className=" navs gap flex flex-center desktop">
                        <li><button className="btn bg-white cart desktop" onClick={handleOpen}><PiShoppingCart size={20} fill="#003CD6"/></button></li>
                        <li><a href="#explore" className="btn bg-black desktop">Explore</a></li>
                    </ul>
                    <Link to="/mini-store/checkout/" className="mobile">
                        <PiShoppingCart size={30} fill="#003CD6" className="mobile"/>
                    </Link>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar