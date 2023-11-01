import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainBody from './components/MainBody';
import axios from "axios"
import { BrowserRouter as Router } from "react-router-dom"
import RespContext from './components/RespContext';
import Footer from './components/Footer';
const BASE_URI = "https://portfolio-backend-1.onrender.com/message"

function App() {
  const [sResp, setsResp] = useState(false);


  useEffect(() => {
    const op = async () => {
      try {
        const response = await axios.get(BASE_URI)
        setsResp(response.status === 200)
      } catch (error) {
        alert("Invalid Data");
        console.error(error)
        return false
      }
    }
    op();
  }, [])

  return (
    <Router>
      <main className="App">
        <RespContext.Provider value={sResp}>
          <Header />
          <MainBody />
          <Footer/>
        </RespContext.Provider>
      </main>
    </Router>
  );
}

export default App;
