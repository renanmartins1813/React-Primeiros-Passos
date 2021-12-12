import './App.css';
import { Routes, Route } from 'react-router';
import AllMeetups from './pages/AllMeetups';
import Props from './pages/Props';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllMeetups/>} />

        <Route path='props' element={<Props/>} />
      </Routes>
    </div>
  );
}

export default App;