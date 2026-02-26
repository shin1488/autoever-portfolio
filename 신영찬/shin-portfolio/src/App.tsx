import { BrowserRouter } from 'react-router-dom';
import './App.module.css';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderContainer />

      </BrowserRouter>
    </div>
  )
}

export default App;
