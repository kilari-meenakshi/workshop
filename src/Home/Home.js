import Carousel from "../Components/Carousel/Carousel"
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"
//import Product from "../Components/Product/Product"
import ProdcutsPage from "../Components/ProductsPage/ProdcutsPage"



const Home = () => {

  return (
    <div>
      <Navbar />
      <Carousel />
      <ProdcutsPage />
      <Footer />
      
    </div>
  )
}


export default Home