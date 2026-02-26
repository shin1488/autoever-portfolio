import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.module.css';
import HeaderContainer from './containers/HeaderContainer/HeaderContainer';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderContainer />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
