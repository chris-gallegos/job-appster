import NewJobForm from "../../components/NewJobForm/NewJobForm"
import "./AddJobPage.css"



export default function AddJobPage({user, job, addJob}) {
    return (
        <div className="add">
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