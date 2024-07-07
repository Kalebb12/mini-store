import Banner from "../../components/banner/banner"
import { Collection } from "../../components/collection/collection"
import Footer from "../../components/footer/footer"
import Products from "../../components/products/products"

const Home = () => {
  return (
    <div >
      <Banner/>
      <Collection/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home