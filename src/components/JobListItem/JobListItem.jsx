import { Link } from 'react-router-dom'

import UpdateJobForm from '../UpdateJobForm/UpdateJobForm'

export default function JobListItem({employment, updateJob, deleteJob}) {
    return (
        <>
            { employment ?
                <tr>
                    <td><p>{employment.name}</p></td>
                    
                    <td><Link to={`/${employment._id}`}>Details</Link></td>

                    <td><UpdateJobForm employment={employment} updateJob={updateJob}/></td>
                
                    <td><button onClick={() => deleteJob(employment._id)}>DELETE</button></td>
                </tr>
            :
                <p>no Jobs</p>
            }
        </>
          
    )
}