import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="grid-container">
        <main className="main">
          <Route path="/" exact={true} component={Home}/>
          <Route path="/product/:id" exact={true} component={ProductDetail}/>
          <Route path="/login" exact={true} component={Login}/>
          <Route path="/register" exact={true} component={Register}/>
        </main>
        <footer className="footer">
          All right reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
