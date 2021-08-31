import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Header from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="grid-container">
        <main className="main">
          <div className="content">
            <Route path="/" exact={true} component={Home}/>
            <Route path="/product/:id" exact={true} component={ProductDetail}/>
          </div>
        </main>
        <footer className="footer">
          All right reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
