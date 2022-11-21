import JobListItem from "../JobListItem/JobListItem";
// import Table from 'react-bootstrap/Table';

export default function JobList({job, updateJob, deleteJob}) {
    return (
      <>
        <h3>Your Job List</h3>
        
          
            <thead>
              <tr>
                <th>Position</th>
                <th>Company</th>
                <th>Update Job Position</th>
                <th>DELETE Job</th>
              </tr>
            </thead>
            <tbody>
            {job.map((employment, idx) => (
              <JobListItem employment = {employment} key = {idx} 
              updateJob={updateJob} deleteJob={deleteJob}/>
            ))}
            </tbody>
        
       
        
        
      </>
      
    )
}