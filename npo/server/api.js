import axios from 'axios';

const api="http://localhost:7777";

const getCatering=()=> axios.get(`${api}/caterings/all`)
const getgallery=()=> axios.get(`${api}/gallery/all`)
const addgallery=(data)=> axios.post(`${api}/gallery/add`,data)
const addvendor=(data)=> axios.post(`${api}/vendor/add`,data)
const getvendor=()=> axios.get(`${api}/vendor/all`)

export {getCatering,getgallery,addgallery,addvendor,getvendor}