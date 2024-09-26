import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c3a415ca6c5647d1b34cd09141b1a13f'
    }
})