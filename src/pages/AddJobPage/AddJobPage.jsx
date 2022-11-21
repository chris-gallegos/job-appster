import { useState, useEffect, useRef } from 'react'
import * as jobsAPI from '../../utilities/jobs-api'

export default function NewOrderPage() {
    const [jobs, setJobs] = useState([]);

    useEffect(function() {
        async function getJobs() {
          const jobs = await jobsAPI.getAll();
          setJobs(jobs);
        }
        getJobs();
      }, []);

    return <h1>Add a job</h1>
}