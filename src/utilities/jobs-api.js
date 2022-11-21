import sendRequest from './send-request';

const BASE_URL = '/api/jobs';

export function getAll() {
  return sendRequest(BASE_URL);
}

//not in use
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
