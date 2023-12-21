import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/test/';

class CompanyService {

  //   getPublicContent() {
  //     return axios.get(API_URL + 'all');
  //   }

  getCompanyBoard(params) {

    return axios.get(API_URL + 'company', params, { headers: authHeader() });
  }

  getJobOfCompany(id){
    return axios.get(API_URL + `companies/${id}/jobs`, {headers: authHeader()});
  }


  getCompany(id) {
    return axios.get(API_URL + `company/${id}`, { headers: authHeader() });
  }

  
  createCompany(formData) {

    return axios.get(API_URL + 'company', formData, { headers: authHeader() });
  }

    updateUser(id,data) {
      return axios.put(API_URL + `user/${id}`, data,{ headers: authHeader() });
    }
    
  deleteCompany(id) {
    return axios.delete(API_URL + `company/${id}`, { headers: authHeader() })
  }


  //   deleteAllUser() {
  //     return axios.delete(API_URL + `user`,{ headers: authHeader() });
  //   }
  //   getModeratorBoard() {
  //     return axios.get(API_URL + 'mod', { headers: authHeader() });
  //   }

  //   getAdminBoard() {
  //     return axios.get(API_URL + 'admin', { headers: authHeader() });
  //   }
}

export default new CompanyService();