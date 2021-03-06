import axios from 'axios';

const baseUrl="http://localhost:8080/"

class UserServices {
        getUsers(){
            return axios.get(baseUrl);
        }    
        createUser(user){
            return axios.get(baseUrl,user);
        }            
        getUserById(id){
            return axios.get(baseUrl+'/'+id);
        }
        updateUser(user,id){
            return axios.get(baseUrl + '/' + id ,user);
        }
    }

export default new UserServices()