import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Header from './components/Header/Header';
import Login from './components/Login/Login';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="grid-container">
        <main className="main">
          {/* <div className="content"> */}
            <Route path="/" exact={true} component={Home}/>
            <Route path="/product/:id" exact={true} component={ProductDetail}/>
            <Route path="/login" exact={true} component={Login}/>
          {/* </div> */}
        </main>
        <footer className="footer">
          All right reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
