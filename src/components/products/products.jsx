import "./products.css";
import { IoStarSharp } from "react-icons/io5";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";
const Products = () => {
  const { handleOrder, data ,cart} = useContext(GlobalContext);
  return (
    <div>
      <div className="container-sm center padding my-product">
        <h2 className="product-title" id="explore">
          Products
        </h2>

        <div className="flex flex-col-3 product-cnt">
          {data.length > 0 ? (
            data.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <img src={"https://api.timbu.cloud/images/"+product.photos[0].url} alt={product.name} />
                  <div className="padding">
                    <div className="flex flex-btw flex-center">
                      <h3>{product.name}</h3>
                    </div>
                    <div className="rating mt-5">
                      <IoStarSharp fill="#9B9B9B" size={10} />
                      <IoStarSharp fill="#9B9B9B" size={10} />
                      <IoStarSharp fill="#9B9B9B" size={10} />
                      <IoStarSharp fill="#9B9B9B" size={10} />
                      <IoStarSharp fill="#9B9B9B" size={10} />
                    </div>
                    <div className="flex flex-center flex-btw">
                      <h5>N{product.current_price[0].NGN[0]}</h5>

                      {
                        cart.find(item => item.id === product.id)?
                        <div className="bg-black alert" >
                          Added
                        </div>:
                      <button className="bg-black" onClick={()=>{handleOrder(product.id)}}>
                        Order
                      </button>
                      }
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Loading....</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
