import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import AddJobPage from '../AddJobPage/AddJobPage'
import AllJobsPage from '../AllJobsPage/AllJobsPage'
import MyProflePage from '../MyProfilePage/MyProfilePage'
import NavBar from '../../components/NavBar/NavBar'
import * as jobsAPI from '../../utilities/jobs-api'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [job, setJob] = useState(null);
  const [switchy, setSwitchy] = useState(true);


  useEffect(function() {
    async function getJob() {
      let employments = await jobsAPI.getAllJobs()
      setJob(employments)
    }

    if (user){
      getJob()
    } else {

    }
    
  }, [switchy, user])

  async function addJob(newJob) {
    const newestProp = await jobsAPI.addAJob(newJob)
    setJob([...job, newestProp])
  }

  async function deleteJob(delJob) {
    const newJobs = await jobsAPI.deleteJob(delJob)
    setJob(newJobs)
} 
  

  async function updateJob(employmentId, updateJob) {
    const updatedJob = await jobsAPI.updateAJob(employmentId, updateJob)
    const newUpdatedJob = {...updatedJob}
    const foundEmployment = job.findIndex(employment => employment._id === employmentId)
    const newJobs = [...job]
    newJobs[foundEmployment] = newUpdatedJob
    setJob(newJobs)
    setSwitchy(!switchy)
  }




  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
           <Route path="/profile" element={<MyProflePage />} />
            <Route path="/jobs/new" element={<AddJobPage user = {user}
             job = {job} addJob={addJob}/>} />
            <Route path="/jobs" element={<AllJobsPage user = {user}
             job = {job} addJob={addJob} updateJob={updateJob}
             deleteJob={deleteJob}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


