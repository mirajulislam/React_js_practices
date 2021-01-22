import axios from 'axios';

const baseUrl="http://localhost:8080/"

class UserServices {
                getUsers(){
                    return axios.get(baseUrl);
                }    
                createUser(user){
                    return axios.get(baseUrl,user);
                }            
    }

export default new UserServices;