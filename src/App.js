import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <Link className="logo" to="/">Clothes Shop</Link>
            <Link to="/">Home</Link>
            <Link to="/">Category</Link>
            <Link to="/">Directory</Link>
          </div>
          <div className="header-links">
            <Link to="/">Sign In</Link>
            <Link to="/">Cart</Link>
          </div>
        </header>
        <main className="main">
          <div className="content">
            <Route path="/" exact={true} component={Home}/>
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
