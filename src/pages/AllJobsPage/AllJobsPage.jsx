import JobList from "../../components/JobList/JobList"

export default function AllJobsPage({user, job, updateJob, deleteJob}) {
    return (
        <div>
            { job && job.length > 0 ?

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
            }
        </div>
    )
}