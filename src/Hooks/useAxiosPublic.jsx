import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
    baseURL: "https://easystore-server-production.up.railway.app"
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;