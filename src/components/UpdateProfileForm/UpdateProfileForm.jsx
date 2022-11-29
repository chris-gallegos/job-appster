import { useState } from 'react'
import { update }  from '../../utilities/users-api'


export default function UpdateProfileForm({user, updateUser}) {
    const [updateUserForm, setUpdateUserForm] = useState({
        name: user.name,
        email: user.email
    })

    async function handleSubmit(evt) {
        evt.preventDefault()
        updateUser(user._id, updateUserForm)
    }

    function handleChange(evt) {
        let newUpdateUserForm = {
            ...updateUserForm,
            [evt.target.name]: evt.target.value
        }
        setUpdateUserForm(newUpdateUserForm)
    }
    
  
    return (
        <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' value={updateUserForm.name} onChange={handleChange}></input>
            <label>Your Email</label>
            <input type='text' name='email' value={updateUserForm.email} onChange={handleChange}></input>
            
            <button type="submit">Update</button>
        </form>
    );
}