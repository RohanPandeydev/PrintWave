import CommonRoutes from "./helper/Routes/CommonRoutes";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "./index.css";
import "./responsive.css";
import { Route, Routes } from "react-router-dom";
import useCartContext from "./contexts/CartContext";
import PageNotFound from "./pages/PageNotFound";

function App() {
  // const { cartList, setCartList } = useCartContext()

  // console.log(cartList,"789")

  return (
    <>
      <Routes>
        {CommonRoutes()}
        <Route exact path="*" element={<PageNotFound />} />



      </Routes>
    </>
  );
}

export default App;
