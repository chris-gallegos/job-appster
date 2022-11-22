import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import AddJobPage from '../AddJobPage/AddJobPage'
import AllJobsPage from '../AllJobsPage/AllJobsPage'
import MyProflePage from '../MyProfilePage/MyProfilePage'
import NavBar from '../../components/NavBar/NavBar'
import EditJobPage from '../EditJobPage/EditJobPage'
import * as jobsAPI from '../../utilities/jobs-api'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [jobs, setJobs] = useState([]);
  const [switchy, setSwitchy] = useState(true);


  useEffect(function() {
    async function getJob() {
      let employments = await jobsAPI.getAllJobs()
      console.log(employments)
      setJobs(employments)
    }

    if (user){
      getJob()
    } else {

    }
    
  }, [switchy, user])

  async function addJob(newJob) {
    const newestProp = await jobsAPI.addAJob(newJob)
    setJobs([...jobs, newestProp])
  }

  async function deleteJob(delJob) {
    const newJobs = await jobsAPI.deleteJob(delJob)
    setJobs(newJobs)
} 
  

  async function updateJob(employmentId, updateJob) {
    const updatedJob = await jobsAPI.updateAJob(employmentId, updateJob)
    const newUpdatedJob = {...updatedJob}
    const foundEmployment = jobs.findIndex(employment => employment._id === employmentId)
    const newJobs = [...jobs]
    newJobs[foundEmployment] = newUpdatedJob
    setJobs(newJobs)
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
             jobs = {jobs} addJob={addJob}/>} />
            <Route path="/jobs" element={<AllJobsPage user = {user}
             jobs = {jobs} addJob={addJob} updateJob={updateJob}
             deleteJob={deleteJob}/>} />
            <Route path='/edit/:id' element={<EditJobPage user = {user} updateJob={updateJob} jobs = {jobs} deleteJob={deleteJob} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


