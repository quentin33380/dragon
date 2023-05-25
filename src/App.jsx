import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createStore } from 'redux';
import './App.css';
import React from 'react';
import { Provider, useSelector } from "react-redux";
import Home from './components/Home';
import Dragons from "./components/Dragons";
import reducer from './reducer';

const store = createStore(reducer);

const CountDisplay = () => {

  //useSelector() permet de ne selectionner que count dans le state pour éviter d'avoir à écrire state.count à chaque fois
  const count = useSelector((state) => state.count);

  return (
    <span>Nombre de dragons : {count}</span>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li><Link to="/dragons">Dragons</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dragons" element={<Dragons />} /> {/* Affichage du nombre de dragons en utilisant le composant CountDisplay */}
          </Routes>
          <CountDisplay />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
