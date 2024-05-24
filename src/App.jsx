import Home from "./Layout/Home";
import Header from "./components/Header";
/* import Loader from "./components/Loader"; */

function App() {
  return (
    <div className='main movieApp'>
      <Header />
      {/* <Loader /> */}
      <Home />
    </div>
  );
}

export default App;
