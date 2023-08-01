import './App.css'
import {HashRouter, Route, Routes} from "react-router-dom";
import MapPage from "./pages/MapPage.tsx";
import "@arcgis/core/assets/esri/themes/dark/main.css";
import ShopsPage from "./pages/shopsPage/ShopsPage.tsx";
import Header from "./components/header/Header.tsx";
import CartPage from "./pages/cartPage/CartPage.tsx";

function App() {
  return (
    <>
        <HashRouter>
            <Header/>
          <Routes>
            <Route path="/" element={<MapPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/shops" element={<ShopsPage/>}/>
          </Routes>
        </HashRouter>
    </>
  )
}

export default App
