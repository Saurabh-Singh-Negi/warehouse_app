import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseInfo from "./pages/WarehouseInfo/WarehouseInfo";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/warehouseinfo/:id"
              element={<WarehouseInfo />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
