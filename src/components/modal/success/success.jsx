import { useContext } from "react";
import { GlobalContext } from "../../../context/context";
import { Link } from "react-router-dom";
import "./success.css"
import success from "/Mask group.png"
const SuccessModal = () => {
    const {payment ,endPayment} = useContext(GlobalContext)
    return (
        <div>
            {payment  && 
            <div>
                <Link to="/">
                <div className="overlay" onClick={endPayment}></div>
                </Link>
                <div className="modalPayment text-center">
                    <img src={success} alt="" width={164}/>

                    <div className="texts">
                        <h2>Successful</h2>
                        <p>
                            Congratulations! <br /> Your purchase was successful
                        </p>
                    </div>
                    <Link to="/">
                        <button onClick={endPayment} className="dark-btn">Home</button>
                    </Link>
                </div>
            </div>}
        </div>
    );
}
 
export default SuccessModal;