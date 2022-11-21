import NewJobForm from "../../components/NewJobForm/NewJobForm"


export default function AddJobPage({user, job, addJob}) {
    return (
        <div>
            { job && job.length > 0 ?

                <>
                    <hr />
                    <h2>Create A Job</h2>
                    <NewJobForm addJob={addJob}/>
                </>
            :
                <>
                    <h1>{user.name}'s has no jobs yet</h1>
                    <sub>Create a Job</sub>
                    <NewJobForm addJob={addJob}/>
                </>
            }
        </div>
)}