import { Fragment } from "react"
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Animals from "./pages/Animals"
import Crops from "./pages/Crops"
import Market from "./pages/Market"


function App() {
  return (
    <Fragment>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/animals" element={<Animals />}/>
        <Route path="/crops" element={<Crops />}/>
        <Route path="/market" element={<Market />}/>
      </Routes>
    </main>
    </Fragment>
  )
}


export default App