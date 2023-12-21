import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard(params) {
    return axios.get(API_URL + 'user', params, { headers: authHeader() });
  }
  getUser(id) {
    return axios.get(API_URL + `user/${id}`, { headers: authHeader() });
  }
  // createUser(data) {
  //   return axios.post(API_URL + 'user/add', {
  //     username: data.username,
  //     email: data.email,
  //     password: data.password
  //   }, { headers: authHeader() });
  // }
    
  createUser(formData) {

    return axios.get(API_URL + 'user', formData, { headers: authHeader() });
  }
  updateUser(id, data) {
    return axios.put(API_URL + `user/${id}`, data, { headers: authHeader() });
  }
  deleteUser(id) {
    return axios.delete(API_URL + `user/${id}`, { headers: authHeader() })
  }
  deleteAllUser() {
    return axios.delete(API_URL + `user`, { headers: authHeader() });
  }
  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();