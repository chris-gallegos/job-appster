import { useState, useEffect } from 'react'
import { Routes, Route, redirect, useNavigate } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import AddJobPage from '../AddJobPage/AddJobPage'
import AllJobsPage from '../AllJobsPage/AllJobsPage'
import MyProflePage from '../MyProfilePage/MyProfilePage'
import NavBar from '../../components/NavBar/NavBar'
import EditJobPage from '../EditJobPage/EditJobPage'
import * as jobsAPI from '../../utilities/jobs-api'
import * as usersAPI from '../../utilities/users-api'


export default function App() {
  const [user, setUser] = useState(getUser())
  const [jobs, setJobs] = useState([]);
  const [switchy, setSwitchy] = useState(true);
 const navigate = useNavigate()

  useEffect(function() {
    async function getJob() {
      let employments = await jobsAPI.getAllJobs()
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
    navigate('/jobs')
  }

  async function deleteJob(delJob) {
    const newJobs = await jobsAPI.deleteJob(delJob)
    setJobs(newJobs)
    navigate('/jobs')
} 
  

  async function updateJob(employmentId, updateJob) {
    const updatedJob = await jobsAPI.updateAJob(employmentId, updateJob)
    const newUpdatedJob = {...updatedJob}
    const foundEmployment = jobs.findIndex(employment => employment._id === employmentId)
    const newJobs = [...jobs]
    newJobs[foundEmployment] = newUpdatedJob
    setJobs(newJobs)
    navigate('/jobs')
    setSwitchy(!switchy)
  }

 //edit user
//  async function updateUser(updateUser) {
//   const updatedUser = await usersAPI.update(update)
//   const newUpdatedUser = {...updatedUser}
//   const foundProfile = jobs.findIndex(employment => employment._id === employmentId)
//   const newJobs = [...jobs]
//   newJobs[foundEmployment] = newUpdatedJob
//   setJobs(newJobs)
//   navigate('/jobs')
//   setSwitchy(!switchy)
// }




  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
           <Route path="/profile" element={<MyProflePage user = {user} />} />
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


