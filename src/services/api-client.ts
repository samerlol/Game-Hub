import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '3ac9a056722b4bfbb81c9a2e75f3a2c6', //TODO: move to env variable.
    }
});