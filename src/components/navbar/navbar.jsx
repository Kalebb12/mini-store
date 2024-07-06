import { FiMenu } from "react-icons/fi"
import "./styles.css"
import { IoCartOutline } from "react-icons/io5"
import { useState } from "react"
import { Link } from "react-router-dom"
import { PiShoppingCart } from "react-icons/pi"
const Navbar = () => {
    const [show ,setShow] = useState(false)
  return (
    <div>
        <header className="padding">
            <div className="container center">
                <div className="flex flex-center flex-btw">
                    <h2 className="no-wrap">No.1 Thrift</h2>
                    
                    <div className="mobile menu-icon" onClick={()=>{setShow(!show)}}>
                        <FiMenu size={20}/>
                    </div>
                    
                    <ul className=" navs gap desktop">
                        <li><button className="btn bg-white">Home</button></li>
                        <li><button className="btn bg-white">Products</button></li>
                        <li><button className="btn bg-white">FAQS</button></li>
                        <li><button className="btn bg-white">Contacts</button></li>
                    </ul>
                    <ul className=" navs gap desktop">
                        <li><button className="btn bg-white cart"><PiShoppingCart size={20} fill="#003CD6"/></button></li>
                        <li><button className="btn bg-black">Order now</button></li>
                    </ul>
                    <ul className={show ? "show":"hidden"} id="sidenav">
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="#">Products</Link></li>
                        <li><Link to="#">FAQS</Link></li>
                        <li><Link to="#">Contacts</Link></li>
                        <li>Cart</li>
                        <li>Order now</li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar