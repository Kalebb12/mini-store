import "./collection.css"
import crocs from "/image 4.png"
import img2 from "/image 5.png"
import cloth from "/image 6.png"
export const Collection = () => {
  return (
    <div className='container-sm padding center flex flex-ard'>
        <div className="item">
            <img src={crocs} alt="" />
            <h3>Crocs</h3>
            <button className="btn-border lg-btn">Explore collection</button>
            <button className="btn-border sm-btn">Explore</button>
        </div>
        <div className="item">
            <img src={img2} alt="" />
            <h3>Crocs</h3>
            <button className="btn-border lg-btn">Explore collection</button>
            <button className="btn-border sm-btn">Explore</button>
        </div>
        <div className="item">
            <img src={cloth} alt="" />
            <h3>Crocs</h3>
            <button className="btn-border lg-btn">Explore collection</button>
            <button className="btn-border sm-btn">Explore</button>
        </div>
    </div>
  )
}
