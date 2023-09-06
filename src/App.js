import './App.css';
import Header from './components/Header';
import MainBody from './components/MainBody';

import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <main className="App">
        <Header />
        <MainBody />
      </main>
    </Router>
  );
}

export default App;
