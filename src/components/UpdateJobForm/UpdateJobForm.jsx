import { useState } from 'react'
import * as jobsAPI from '../../utilities/jobs-api'

export default function UpdateJobForm({employment, updateJob}) {
    const [updateJobForm, setUpdateJobForm] = useState({
        name: ''
    })


    async function handleSubmit(evt) {
        evt.preventDefault()
        updateJob(employment._id, updateJobForm)
        setUpdateJobForm({
            name: ''
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
            <label>Job Name:</label>
            <input type='text' name='name' value={updateJobForm.name} onChange={handleChange}></input>
            <button type="submit">UPDATE</button>
        </form>
    );
}