const axios = require('axios');
const cheerio = require('cheerio');

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});
instance.interceptors.request.use((config) => {
    return config;
});
instance.interceptors.response.use((response) => {
    return {
        $: cheerio.load(response.data),
        page: response.data,
    }
});

module.exports = instance;
