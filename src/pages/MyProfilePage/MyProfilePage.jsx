import UpdateProfileForm from "../../components/UpdateProfileForm/UpdateProfileForm"
import "./MyProfilePage.css"

export default function MyProfile({user, updateUser}) {

  
    return (
    <div className="Profile">
        <h2>Profile</h2>
        <UpdateProfileForm user={user} updateUser={updateUser} />
        <div className="profile-card">
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </div>
    </div>
    )
}