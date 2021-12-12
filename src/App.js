import './App.css';
import { Routes, Route } from 'react-router';
import Props from './pages/Props';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllMeetups/>} />

        <Route path='props' element={<Props/>} />

        <Route path='favorites'element={<Favorites/>}/>

        <Route path='newmeetup' element={<NewMeetup/>}/>
      </Routes>
    </div>
  );
}

export default App;