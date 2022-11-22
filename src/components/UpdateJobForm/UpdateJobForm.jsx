import { useState } from 'react'
import * as jobsAPI from '../../utilities/jobs-api'

export default function UpdateJobForm({employment, updateJob, singleJob}) {
    const [updateJobForm, setUpdateJobForm] = useState({
        position: singleJob.position,
        company: singleJob.company,
        location: singleJob.location,
        status: singleJob.status,
        date: singleJob.date
    })

    async function handleSubmit(evt) {
        evt.preventDefault()
        updateJob(singleJob._id, updateJobForm)
    }

    function handleChange(evt) {
        let newUpdateJobForm = {
            ...updateJobForm,
            [evt.target.name]: evt.target.value
        }
        setUpdateJobForm(newUpdateJobForm)
    }
    
  console.log(updateJobForm)
    return (
        <form onSubmit={handleSubmit}>
            <label>Position</label>
            <input type='text' name='position' value={updateJobForm.position} onChange={handleChange}></input>
            <label>Company</label>
            <input type='text' name='company' value={updateJobForm.company} onChange={handleChange}></input>
            <label>Location</label>
            <input type='text' name='location' value={updateJobForm.location} onChange={handleChange}></input>
            <label>Status</label>
            <select name="status" value={updateJobForm.status} onChange={handleChange}>
                <option value='Pending'>pending</option>
                <option value='Declined'>declined</option>
                <option value='Interview'>interview</option>
            </select>
            <label>Recent Date</label>
            <input type='date' name='date' value={updateJobForm.date} onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    );
}