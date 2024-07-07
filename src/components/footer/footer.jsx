import "./footer.css"
import instagram from "/instagram.png"
import x from "/x.png"
import tiktok from "/tiktok.png"
import thread from "/thread.png"
import facebook from "/facebook.png"
const Footer = () => {
    return (
        <footer>
            <div className="footer-container padding">
                <div className="flex flex-center  flex-btw padding">
                    <p>Home</p>
                    <p>Products</p>
                    <p>Faqs</p>
                    <p>Contact</p>
                </div>
                <div className="logos flex flex-center center flex-btw padding">
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={thread} alt="" />
                    <img src={tiktok} alt="" />
                    <img src={x} alt="" />
                </div>
                <div className="logos center  padding">
                    <h1>No.1 Thrift</h1>
                </div>  
                <div className="logos center padding">
                    <p className="text-center">Copyrightcno.1thrift2024</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;