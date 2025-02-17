import react from 'react';
import axios from 'axios';

const baseurl = "http://localhost:8080/api/customer";

class ServiceList {

    getallUser() {
        return axios.get(baseurl);
    }

    createUser(CustomerEntity) {
        return axios.post(baseurl, CustomerEntity);
    }

    getbyID(cus_id) {
        return axios.get(baseurl+ "/" + cus_id);
    }

    updateUser(cus_id, CustomerEntity) {
        return axios.put(baseurl+ "/" + cus_id, CustomerEntity);
    }

    deleteUser(cus_id) {
        return axios.delete(baseurl+ "/" + cus_id);
    }
}

export default new ServiceList;