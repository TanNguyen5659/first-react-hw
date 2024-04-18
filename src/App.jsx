import Header from "./Header"
import BootstrapBody from "../components/bootstrap"
import Nav1 from "../components/nav"
import Footer from "../components/footer"
import Agecounter from "../components/agecounter"
import useFetchDataAndTable from "../components/useFetchDataAndTable"

export default function App(){

  const DataTable = useFetchDataAndTable();
  return (
    <>
      <Nav1/>
      <Header/>
      <BootstrapBody/>
      <Agecounter/>
      <div className="data-container">
        <h2>Data from Flask Backend:</h2>
        {DataTable}
      </div>
      <Footer></Footer>
    </>
  )
}

