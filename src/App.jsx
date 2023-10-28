import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import Detail from "./components/Detail/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
