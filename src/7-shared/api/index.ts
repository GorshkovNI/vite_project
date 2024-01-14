import axios from "axios";
import {config} from "../config/const.ts";

export const api = axios.create({
    baseURL: `${config.MAIN_URL}`
})
