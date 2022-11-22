import UpdateJobForm from "../../components/UpdateJobForm/UpdateJobForm"
import { Link, useParams } from 'react-router-dom'

export default function EditJobPage({jobs, updateJob, deleteJob}) {
    const {id} = useParams()
    const singleJob = jobs.filter(job => job._id === id)
    console.log(singleJob)
    return (
        <div>
            <h2>Update Job</h2>
            <UpdateJobForm updateJob={updateJob} deleteJob={deleteJob}/>
            
        </div>
    )
}