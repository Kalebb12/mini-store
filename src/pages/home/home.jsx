import Banner from "../../components/banner/banner"
import { Collection } from "../../components/collection/collection"
import Products from "../../components/products/products"

const Home = () => {
  return (
    <div >
      <Banner/>
      <Collection/>
      <Products/>
    </div>
  )
}

export default Home