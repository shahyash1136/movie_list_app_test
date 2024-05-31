import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import store from "./store/store";
import Header from "./components/Header";
import "simplebar-react/dist/simplebar.min.css";
import ErrorBoundary from "./ErrorBoundary";
import Loader from "./components/Loader";

// Lazy load the Home component
const Home = React.lazy(() => import("./Layout/Home"));

function App() {
  return (
    <Provider store={store}>
      <div className='main movieApp'>
        <Header />
        <ErrorBoundary>
          <BrowserRouter>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Navigate to='/' />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ErrorBoundary>
      </div>
    </Provider>
  );
}

export default App;
