import { useState } from 'react'


export default function UpdateProfileForm({user}) {
    const [updateUserForm, setUpdateUserForm] = useState({
        name: user.name,
        email: user.email
    })

    async function handleSubmit(evt) {
        evt.preventDefault()
        // update(user._id, updateUserForm)
    }

    function handleChange(evt) {
        let newUpdateUserForm = {
            ...updateUserForm,
            [evt.target.name]: evt.target.value
        }
        setUpdateUserForm(newUpdateUserForm)
    }
    
  console.log()
    return (
        <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type='text' name='position' value={updateUserForm.position} onChange={handleChange}></input>
            <label>Your Email</label>
            <input type='text' name='company' value={updateUserForm.company} onChange={handleChange}></input>
            
            <button type="submit">Submit</button>
        </form>
    );
}