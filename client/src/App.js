import { useEffect, useState } from 'react';
import './App.css';
import Allroutes from './Components/AllRoutes/Allroutes';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import NewNavbar from './Components/newnavbar/NewNavbar'
import PageLoading from './Components/Loading/PageLoading';

function App() {
  let [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 1000)
  })

  return (
    <>
      <Navbar />
      <NewNavbar />
      {loading ? <PageLoading /> : <Allroutes />}
      <Footer />
    </>
  );
}

export default App;
