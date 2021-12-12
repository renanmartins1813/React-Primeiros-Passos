import './App.css';
import { Routes, Route } from 'react-router';
import AllMeetups from './pages/AllMeetups';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllMeetups/>} />
      </Routes>
    </div>
  );
}

export default App;