import './App.css';
import { Routes, Route } from 'react-router';
import Layout from './components/layout/Layout';
import Props from './pages/Props';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetups/>} />
          <Route path='props' element={<Props/>} />
          <Route path='favorites'element={<Favorites/>}/>
          <Route path='new-meetup' element={<NewMeetup/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;