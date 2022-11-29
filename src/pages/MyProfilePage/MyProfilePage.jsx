import UpdateProfileForm from "../../components/UpdateProfileForm/UpdateProfileForm"
import "./MyProfilePage.css"

export default function MyProfile({user, updateUser}) {

  
    return (
    <div className="Profile">
        <h2>Profile</h2>
        <UpdateProfileForm user={user} updateUser={updateUser} />
        <div>
            <h1>Hello, my name is {user.name}</h1>
            <h1>My email is {user.email}</h1>
        </div>
    </div>
    )
}