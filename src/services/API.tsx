const API_KEY = 'JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
const API_BASE = 'http://localhost/gitHubJobsAPI';

const basicFetch = async (endpoint: string, method: string) => {

    let options = {
        method: method
    }

    let response = await fetch(`${API_BASE}${endpoint}`, options);
    let json = await response.json();

    return json;
}

export default {
    getJobs: async () => {
        return await basicFetch(`/trabalhos?key=${API_KEY}`, 'GET');
    },
    getJobById: async (id: number) => {
        return await basicFetch(`/trabalhos/${id}?key=${API_KEY}`, 'GET');
    }
}