import Home from './Components/Home';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
