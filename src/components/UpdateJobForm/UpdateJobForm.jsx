import { useState } from 'react'
import * as jobsAPI from '../../utilities/jobs-api'

export default function UpdateJobForm({employment, updateJob}) {
    const [updateJobForm, setUpdateJobForm] = useState({
        position: '',
        company: '',
        location: '',
        status: '',
    })


    async function handleSubmit(evt) {
        evt.preventDefault()
        updateJob(employment._id, updateJobForm)
        setUpdateJobForm({
            position: '',
            company: '',
            location: '',
            status: '',
        })
    }

    function handleChange(evt) {
        let newUpdateJobForm = {
            ...updateJobForm,
            [evt.target.name]: evt.target.value
        }
        setUpdateJobForm(newUpdateJobForm)
    }
    
  
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
            <button type="submit">Submit</button>
        </form>
    );
}