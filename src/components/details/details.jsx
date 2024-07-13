import { useContext } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import { GlobalContext } from "../../context/context";
const Details = () => {
  const { id } = useParams();
  const { data ,handleOrder ,cart} = useContext(GlobalContext);
  const product = data.find((x) => x.id === id);
  return (
    <div>
      <div className="container center padding">
        {!product && <p>loading....</p>}
        {product && (
          <div className="details flex gap flex-start flex-btw">
            <img
              src={"https://api.timbu.cloud/images/" + product.photos[0].url}
              alt={product.name}
            />
            <div className="flex flex-col gap">
                <div>
                    <h2>{product.name}</h2>
                    <h2>Price : N{product.current_price[0].NGN[0]}</h2>
                    <p>
                        <span>Description:</span> {product.description}
                    </p>
                </div>
                {
                        cart.find(item => item.id === id)?
                        <button className="bg-black d-btn" >
                          Added
                        </button>:
                        <button className="bg-black d-btn" onClick={()=>{handleOrder(product.id)}}>Add To Cart</button>
                }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
