import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import About from './pages/about/About';
import Home from './pages/home/Home';
import Redirect from './pages/Redirect';
import Tutorial from './pages/tutorial/Tutorial';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/javascript" element={<Home />} />
        <Route path="/nodejs" element={<Home />} />
        <Route path="/react" element={<Home />} />
        <Route path="/reactnative" element={<Home />} />
        <Route path="/database" element={<Home />} />
        <Route path="/algorithms" element={<Home />} />
        <Route path="/software" element={<Home />} />
        {/* <Route path="/:category" element={<Home />}/>   */}
        {/* <Route path="/javascript/" element={<Navigate  to="/javascript" />  }/>   */}
        <Route path="/tutorial/:content" element={<Tutorial />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Redirect />} />

        <Route path="*" element={<Redirect />} />

        {/* <Route path="*" component={About} />  */}
        {/* <Route   element={<Navigate  to="/javascript" />} />  */}

        {/* <Navigate  to="/javascript" /> */}

      </Routes>

    </BrowserRouter>
  );
}

export default App;
