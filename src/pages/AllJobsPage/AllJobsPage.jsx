import { Link } from 'react-router-dom'

export default function AllJobsPage({jobs}) {
    console.log(jobs)
    return (
        <div>
           {  jobs.map(job => {
                return(
                    <Link to={`/edit/${job._id}`}>
                    <ul>
                    <li>{job.position}</li>
                    <li>{job.company}</li>
                    <li>{job.location}</li>
                    <li>{job.status}</li>
                    <li>{job.date}</li>
                    </ul>
                    </Link>
                )
            })
        }
        </div>
    )
}