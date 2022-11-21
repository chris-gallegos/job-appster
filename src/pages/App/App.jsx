import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import AddJobPage from '../AddJobPage/AddJobPage'
import AllJobsPage from '../AllJobsPage/AllJobsPage'
import MyProflePage from '../MyProfilePage/MyProfilePage'
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
           <Route path="/profile" element={<MyProflePage />} />
            <Route path="/jobs/new" element={<AddJobPage />} />
            <Route path="/jobs" element={<AllJobsPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


