import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.module.css';
import HeaderContainer from './containers/HeaderContainer/HeaderContainer';
import Home from './pages/Home/Home';
import FooterContainer from './containers/FooterContainer/FooterContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderContainer />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <FooterContainer />
      </BrowserRouter>
    </div>
  )
}

export default App;
