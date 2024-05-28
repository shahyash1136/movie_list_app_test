import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./Layout/Home";
import Header from "./components/Header";
import "simplebar-react/dist/simplebar.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className='main movieApp'>
        <Header />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
