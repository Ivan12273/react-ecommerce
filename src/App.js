import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Category from './components/pages/Category/Category';
import ProductDetail from './components/pages/ProductDetail/ProductDetail';
import Header from './components/Header/Header';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Cart from './components/pages/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="grid-container">
        <main className="main">
          <Route path="/" exact={true} component={Home}/>
          <Route path="/category/:category" exact={true} component={Category}/>
          <Route path="/product/:id" exact={true} component={ProductDetail}/>
          <Route path="/login" exact={true} component={Login}/>
          <Route path="/register" exact={true} component={Register}/>
          <Route path="/cart/:id?" component={Cart} />
        </main>
        <footer className="footer">
          All right reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
