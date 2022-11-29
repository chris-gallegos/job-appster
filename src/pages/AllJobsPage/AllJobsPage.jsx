import { Link } from 'react-router-dom'
import "./AllJobsPage.css"

export default function AllJobsPage({jobs}) {
    return (
        <div className='jobs-container'>
           {  jobs.map(job => {
                return(
                    
                    <Link className='lk' to={`/edit/${job._id}`}>
                    <div className='title'>
                        <h2 className='position'>{job.position}</h2>
                        <h3 className='company'>{job.company}</h3>
                        <p className='sub'>{job.location}</p>
                        <p className='sub'>{job.status}</p>
                        <p className='sub'>{job.date}</p>
                        <br></br>
                    </div>
                    </Link>
                )
            })
          }
        </div>
    )
}