import main from '../../assets/images/main.svg'
import "./HomePage.css"
import { Link } from 'react-router-dom';

export default function HomePage() {

  
    return (
    <div className="Profile">
        <h2>Job Appster</h2>
        <div className='section'>
            <img src={main} alt='main img here' />
            <h3>Welcome to Job Appster!</h3>
            <p>Our mission is to make your job search as trackable as possible!</p>
            <p>We love helping people find their next amazing oppurtunity. We are exitced you are here!</p>
        </div>
        <button><Link to='/jobs/new' className='btn btn-hero start'>
            Get Started
        </Link></button>
    </div>
    )
}