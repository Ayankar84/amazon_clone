import './App.css';
import Navbar from './Components/Header/Navbar';
import MainComponent from './Components/Home/MainComponent';
import NewNavbar from './Components/newnavbar/NewNavbar';

function App() {
  return (
    <>
      <Navbar />
      <NewNavbar />
      <MainComponent />
    </>
  );
}

export default App;
