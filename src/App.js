import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './App/Main.jsx';
import Order from './App/Order.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import { cartStorage } from './database/cartStorage.js'
import ScrollToTop from './Components/ScrollToTop.jsx';

function App() {
  cartStorage.init();
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/order' element={<Order />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
