import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: "https://easystore-server-production.up.railway.app"
})

const useAxiosSecure = () => {

    const { logoutSystem } = useAuth()
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {

        const token = localStorage.getItem('access-token')
        console.log("interceptors for checking token", token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error);
    })


    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = error.response.status;
        console.log("status error in the inerceptors", status)
        if (status === 401 || status === 403) {
            await logoutSystem()
            navigate("/login")
        }
        return Promise.reject(error)
    })

    return axiosSecure
};

export default useAxiosSecure;