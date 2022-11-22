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

                     <h2>Create A Job</h2>
                    <NewJobForm addJob={addJob}/>
                </>
            }
        </div>
)}