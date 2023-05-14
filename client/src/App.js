import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import MainComponent from './Components/Home/MainComponent';
import NewNavbar from './Components/newnavbar/NewNavbar';

function App() {
  return (
    <>
      <Navbar />
      <NewNavbar />
      <MainComponent />
      <Footer />
    </>
  );
}

export default App;
