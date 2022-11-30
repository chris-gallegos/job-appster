import NewJobForm from "../../components/NewJobForm/NewJobForm"
import "./AddJobPage.css"



export default function AddJobPage({addJob}) {
    return (
        <div className="add">
            <h2>Create A Job</h2>
            <NewJobForm addJob={addJob}/>
        </div>
)}