import UpdateJobForm from "../../components/UpdateJobForm/UpdateJobForm"
import { Link, useParams } from 'react-router-dom'
import "./EditJobPage.css"


export default function EditJobPage({jobs, updateJob, deleteJob}) {
    const {id} = useParams()
    const singleJob = jobs.filter(job => job._id === id)
    console.log(singleJob)
    return (
        <div className="update">
            <h2>Update Job</h2>
            <UpdateJobForm singleJob={singleJob[0]} updateJob={updateJob} />
            <button className="delete" onClick={() => deleteJob(id)}>DELETE</button>
        </div>
    )
}