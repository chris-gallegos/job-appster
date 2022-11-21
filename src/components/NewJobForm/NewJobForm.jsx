import { useState } from 'react'

export default function NewJobForm({addJob}) {
    const [jobForm, setJobForm] = useState({
        name: ''
    })


    async function handleSubmit(evt) {
        evt.preventDefault()
        addJob(jobForm)
        setJobForm({
            name: ''
        })
    }

    function handleChange(evt) {
        let newJobForm = {
            ...jobForm,
            [evt.target.name]: evt.target.value
        }
        setJobForm(newJobForm)
    }
    
  
    return (
        <form onSubmit={handleSubmit}>
            <label>Job Name:</label>
            <input type='text' name='name' value={jobForm.name} onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    );
}