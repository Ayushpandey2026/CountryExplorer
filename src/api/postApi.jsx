import axios from 'axios';

const api = axios.create({
    baseURL:""
})

export const getCountry = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
}

export const getCountryData = (name) => {
    return api.get(`/name/${name}?fullText="true&fields=name,population,region,capital,flags`);
}
