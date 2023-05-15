import './App.css';
import Allroutes from './Components/AllRoutes/Allroutes';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import NewNavbar from './Components/newnavbar/NewNavbar'

function App() {
  return (
    <>
      <Navbar />
      <NewNavbar />
      <Allroutes />
      <Footer />
    </>
  );
}

export default App;
