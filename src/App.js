import Home from './Components/Home';
import Header from './Components/Header';
import Recommend from './Components/Recommend';
import Banner from './Components/Banner';
import Store from './Components/Store';
import Footer from './Components/Footer';
import Dishes from './Components/Dishes';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Recommend />
        <Banner />
        <Store />
        <Footer />
        


      </div>
    </Router>
  );
}

export default App;
