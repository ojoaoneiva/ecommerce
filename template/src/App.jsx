import './App.css';
import { Routess } from './Components/router/Router';
import GlobalState from './Components/contexts/GlobalState';

function App() {
  return (
    <GlobalState>
      <Routess />      
    </GlobalState>
  );
}

export default App;