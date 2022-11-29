import UpdateProfileForm from "../../components/UpdateProfileForm/UpdateProfileForm"
import "./MyProfilePage.css"

export default function MyProfile({user, updateUser}) {

  
    return (
    <div className="Profile">
        <h2>Profile</h2>
        <UpdateProfileForm user={user} updateUser={updateUser} />
        <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
        </ul>
    </div>
    )
}