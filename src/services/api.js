import axios from 'axios';


const API_URL = 'https://65decd17ff5e305f32a07c40.mockapi.io/user1';

export const getUsers = () => axios.get(API_URL);
export const addUser = (user) => axios.post(API_URL, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
