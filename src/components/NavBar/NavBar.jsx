import { Link } from 'react-router-dom'
import { FaRegUserCircle, FaSearch, FaRegFileAlt, FaSignOutAlt } from "react-icons/fa";
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <div className='Sidebar'>
            <Link className='link' to="/profile"><FaRegUserCircle /> Profile</Link> 
            &nbsp;  
            <Link className='link' to="/jobs"><FaSearch /> All Jobs</Link>
            &nbsp; 
            <Link className='link' to="/jobs/new"><FaRegFileAlt /> Add a Job</Link>
            &nbsp; 
            <Link className='link' to="" onClick={handleLogOut}><FaSignOutAlt /> Log Out</Link>
        </div>
    )
}