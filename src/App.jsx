import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import store from "./store/store";
import Home from "./Layout/Home";
import Header from "./components/Header";
import "simplebar-react/dist/simplebar.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className='main movieApp'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
