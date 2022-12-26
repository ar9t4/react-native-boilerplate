import axios from "axios";
import { contentType, applicationJson, accept, baseURL, timeout } from '../constants/constants';

export default axios.create({
    baseURL: baseURL,
    headers: {
        [contentType]: applicationJson,
        [accept]: applicationJson
    },
    timeout: timeout
});