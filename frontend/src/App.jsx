import './App.css';
import SessionProvider from './context/session';
import Chat from './Pages/Chat/Chat';

const App = () => (
  <SessionProvider>
    <Chat />
  </SessionProvider>
);

export default App;
