import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <img src={gfdLogo} className="GFD-Logo" alt="logo" /> */}
      <Nav/>
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
