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
import { IoStarSharp } from "react-icons/io5";
import { BiSolidCart } from "react-icons/bi";
const Products = () => {
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
                <button className="bg-black">Order</button>
              </div>
            </div>
          </div>

          <div className="product">
            <img src={img2} alt="" />
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
                <button className="bg-black">Order</button>
              </div>
            </div>
          </div>

          <div className="product">
            <img src={img3} alt="" />
            <div className="padding">
              <div className="flex flex-btw flex-center">
                <h3>Brown face cap</h3>
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
                <button className="bg-black">Order</button>
              </div>
            </div>
          </div>


          {/* row  2  */}
          <div className="product">
            <img src={img4} alt=""/>
            <div className="padding">
              <div className="flex flex-btw flex-center">
                <h3>Brown Zip up Hoodie</h3>
              </div>
              <div className="rating mt-5">
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
              </div>
              <div className="flex flex-center flex-btw">
                <h5>N5000</h5>
                <button className="bg-black">Order</button>
              </div>
            </div>
          </div>

          <div className="product">
            <img src={img5} alt="" />
            <div className="padding">
              <div className="flex flex-btw flex-center">
                <h3>Beige loose trouser for women</h3>
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
                <button className="bg-black">Order</button>
              </div>
            </div>
          </div>

          <div className="product">
            <img src={img6} alt="" />
            <div className="padding">
              <div className="flex flex-btw flex-center">
                <h3>White hoodie</h3>
              </div>
              <div className="rating mt-5">
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
              </div>
              <div className="flex flex-center flex-btw">
                <h5>N4500</h5>
                <button className="bg-black">Order</button>
              </div>
            </div>
          </div>

          {/* row 3  */}
          <div className="product">
            <img src={img7} alt="" />
            <div className="padding">
              <div className="flex flex-btw flex-center">
                <h3>Classic rubber crocs</h3>
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
                <button className="bg-black">Order</button>
              </div>
            </div>
          </div>

          <div className="product">
            <img src={img8} alt="" />
            <div className="padding">
              <div className="flex flex-btw flex-center">
                <h3>Floral design low  cover shoe</h3>
              </div>
              <div className="rating mt-5">
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
              </div>
              <div className="flex flex-center flex-btw">
                <h5>N3000</h5>
                <button className="bg-black">Order</button>
              </div>
            </div>
          </div>

          <div className="product">
            <img src={img9} alt="" />
            <div className="padding">
              <div className="flex flex-btw flex-center">
                <h3>Burgundy boots</h3>
              </div>
              <div className="rating mt-5">
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
              </div>
              <div className="flex flex-center flex-btw">
                <h5>N9000</h5>
                <button className="bg-black">Order</button>
              </div>
            </div>
          </div>

          <div className="product">
            <img src={img9} alt="" />
            <div className="padding">
              <div className="flex flex-btw flex-center">
                <h3>Burgundy boots</h3>
              </div>
              <div className="rating mt-5">
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
              </div>
              <div className="flex flex-center flex-btw">
                <h5>N9000</h5>
                <button className="bg-black">Order</button>
              </div>
            </div>
          </div>



          <div className="product">
            <img src={img9} alt="" />
            <div className="padding">
              <div className="flex flex-btw flex-center">
                <h3>Burgundy boots</h3>
              </div>
              <div className="rating mt-5">
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
              </div>
              <div className="flex flex-center flex-btw">
                <h5>N9000</h5>
                <button className="bg-black">Order</button>
              </div>
            </div>
          </div>



          <div className="product">
            <img src={img9} alt="" />
            <div className="padding">
              <div className="flex flex-btw flex-center">
                <h3>Burgundy boots</h3>
              </div>
              <div className="rating mt-5">
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
              </div>
              <div className="flex flex-center flex-btw">
                <h5>N9000</h5>
                <button className="bg-black">Order</button>
              </div>
            </div>
          </div>



          <div className="product">
            <img src={img9} alt="" />
            <div className="padding">
              <div className="flex flex-btw flex-center">
                <h3>Burgundy boots</h3>
              </div>
              <div className="rating mt-5">
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
              </div>
              <div className="flex flex-center flex-btw">
                <h5>N9000</h5>
                <button className="bg-black">Order</button>
              </div>
            </div>
          </div>



          <div className="product">
            <img src={img9} alt="" />
            <div className="padding">
              <div className="flex flex-btw flex-center">
                <h3>Burgundy boots</h3>
              </div>
              <div className="rating mt-5">
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
              </div>
              <div className="flex flex-center flex-btw">
                <h5>N9000</h5>
                <button className="bg-black">Order</button>
              </div>
            </div>
          </div>



          <div className="product">
            <img src={img9} alt="" />
            <div className="padding">
              <div className="flex flex-btw flex-center">
                <h3>Burgundy boots</h3>
              </div>
              <div className="rating mt-5">
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
                <IoStarSharp fill="#9B9B9B" size={10} />
              </div>
              <div className="flex flex-center flex-btw">
                <h5>N9000</h5>
                <button className="bg-black">Order</button>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Products;
