import UpdateProfileForm from "../../components/UpdateProfileForm/UpdateProfileForm"


export default function MyProfile({user}) {

    console.log(user)
    return (
    <div>
        <h2>Profile</h2>
        <UpdateProfileForm user={user} />
        <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
        </ul>
    </div>
    )
}