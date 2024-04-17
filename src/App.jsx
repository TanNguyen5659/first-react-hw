import Header from "./Header"
import BootstrapBody from "../components/bootstrap"
import Nav1 from "../components/nav"
import Footer from "../components/footer"
import Agecounter from "../components/agecounter"

export default function App(){
  return (
    <>
      <Nav1/>
      <Header/>
      <BootstrapBody/>
      <Agecounter/>
      <Footer></Footer>
    </>
  )
}

