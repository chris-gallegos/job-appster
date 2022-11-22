import { useState } from 'react'

export default function NewJobForm({addJob}) {
    const [jobForm, setJobForm] = useState({
        position: '',
        company: '',
        location: '',
        status: '',
    })


    async function handleSubmit(evt) {
        evt.preventDefault()
        addJob(jobForm)
        setJobForm({
            position: '',
            company: '',
            location: '',
            status: '',
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
            <label>Position</label>
            <input type='text' name='position' value={jobForm.position} onChange={handleChange}></input>
            <label>Company</label>
            <input type='text' name='company' value={jobForm.company} onChange={handleChange}></input>
            <label>Location</label>
            <input type='text' name='location' value={jobForm.location} onChange={handleChange}></input>
            <label>Status</label>
            <select name="status" value={jobForm.status} onChange={handleChange}>
                <option value='Pending'>pending</option>
                <option value='Declined'>declined</option>
                <option value='Interview'>interview</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
}