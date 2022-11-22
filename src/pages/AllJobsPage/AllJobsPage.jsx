import JobList from "../../components/JobList/JobList"
import { Link } from 'react-router-dom'

export default function AllJobsPage({jobs}) {
    console.log(jobs)
    return (
        <div>
            {/* { job && job.length > 0 ?

                <>
                    <JobList job={job} updateJob={updateJob} deleteJob={deleteJob}/>
                    <hr />
                    <h4>To create a job, navigate to 'Add a Job'</h4>
                </>
            :
                <>
                    <h1>{user.name}'s has no jobs yet</h1>
                    <h4>To create a job, navigate to 'Add a Job'</h4>
                </>
            } */}
           {  jobs.map(job => {
                return(
                    <Link to={`/edit/${job._id}`}>
                    <ul>
                    <li>{job.position}</li>
                    <li>{job.company}</li>
                    <li>{job.location}</li>
                    <li>{job.status}</li>
                    </ul>
                    </Link>
                )
            })
        }
        </div>
    )
}