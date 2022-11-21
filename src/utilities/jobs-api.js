import sendRequest from './send-request';
const BASE_URL = '/api/jobs';

export function getAllJobs() {
    return sendRequest(`${BASE_URL}/index`);
}

export function addAJob (jobForm) {
    return sendRequest(`${BASE_URL}/create`, 'POST', jobForm);
}

export function deleteJob (job) {
    return sendRequest(`${BASE_URL}/delete/${job}`, 'DELETE');
}

export function updateAJob (job, updateJobData) {
    return sendRequest(`${BASE_URL}/${job}`, 'PUT', updateJobData)
}

export function getOneJob (selectedJob) {
    return sendRequest(`${BASE_URL}/${selectedJob}`)
}