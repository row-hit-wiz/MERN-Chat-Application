import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route } from 'react-router-dom';
import './App.css';
import chatpage from './pages/chatpage';
import homepage from './pages/homepage';


function App() {
  return (
    <div className="App">
      <Route path="/"component={homepage} exact/>
      <Route path="/chats"component={chatpage}/>
    </div>
  );
}

export default App;
