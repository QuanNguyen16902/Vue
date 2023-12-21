import axios from 'axios'
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/test/'; 

class JobService {
    getJob(id){
        return axios.get(API_URL + `jobs/${id}`, {headers: authHeader()});
    }
    getBoardJob(){
        
        return axios.get(API_URL + 'jobs',{ headers: authHeader() });
    }
    
    createJob(data){
        return axios.post(API_URL + 'jobs/add', data ,{headers: authHeader()});
    }
    createJobFromCompany(companyId , data){
        return axios.post(API_URL + `companies/${companyId}/jobs`,data, {headers: authHeader()})
    }
    updateJob(id, data){
        return axios.put(API_URL + `jobs/${id}`, data, {headers: authHeader()});
    }

    deletejob(id){
        return axios.delete(API_URL + `jobs/${id}`, {headers: authHeader()});
    }
    deleteJobFromCompany(companyId, jobId){
        return axios.delete(API_URL + `companies/${companyId}/jobs/${jobId}`, {headers: authHeader()})
      }
}
export default new JobService();