import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Product from './component/Product';
import Default from './component/Default'
import Details from './component/Details';
import Cart from './component/Cart';
import Modal from './component/Modal';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal/>
    
    </React.Fragment>
  );
}

export default App;
