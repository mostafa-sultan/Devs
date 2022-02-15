import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,HashRouter
} from "react-router-dom";
import About from './pages/about/About';
import Home from './pages/home/Home';
import Redirect from './pages/Redirect';
import Tutorial from './pages/tutorial/Tutorial';

ReactDOM.render(
   
  <HashRouter>
    <Routes>
      <Route exact path="/javascript" element={<Home />} />
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
      <Route exact path="/" element={<Redirect />} />

      <Route path="*" element={<Redirect />} />

      {/* <Route path="*" component={About} />  */}
      {/* <Route   element={<Navigate  to="/javascript" />} />  */}

      {/* <Navigate  to="/javascript" /> */}

    </Routes>

  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
