import './App.css';
import './index.css';
import Navbar from './myComponents/Navbar';
import Herosection from './myComponents/Herosection';
import Shopsec from './myComponents/Shopsec';
import Footer from './myComponents/Footer';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <>
      <Navbar />
      <Herosection />
      <Shopsec/>
      <Footer/>
    </>
    </div>
  );
}

export default App;
