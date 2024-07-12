import "./products.css";
import img1 from "/chilling.png";
import img2 from "/sneakers.png";
import img3 from "/cap.png";
import img4 from "/brown-shirt.png";
import img5 from "/joggers.png";
import img6 from "/shirt.png";
import img7 from "/crocs.png";
import img8 from "/flatshoe.png";
import img9 from "/rubber-boots.png";
import hat from "/buckect-hat.png"
import cap from '/face-cap.png'
import belt from '/belt.png'
import { IoStarSharp } from "react-icons/io5";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";
const Products = () => {
  const {handleOrder} = useContext(GlobalContext)
  return (
    <div>
      <div className="container-sm center padding">
        <h2 className="product-title" id="explore">Products</h2>

          
        <div className="flex flex-col-3 product-cnt">
          <div className="product">
            <img src={img1} alt="" />
            <div className="padding">
              <div className="flex flex-btw flex-center">
                <h3>Classic Nike Sneakers</h3>
              </div>
              <div className="rating mt-5">
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
              </div>
              <div className="flex flex-center flex-btw">
                <h5>N2500</h5>
                <button className="bg-black" onClick={handleOrder}>Order</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;
