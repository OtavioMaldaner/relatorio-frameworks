import axios from 'axios';
import { Jogador } from './types';
const request = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET"
    },
    withCredentials: false
});
export default {
    jogadores: {
        getLength: async (): Promise<number> => {
            const response = await request.get('jogadores/');
            // console.log(response);
            if (response.status == 200) {
                return response.data;
            } else  {
                return 0;
            }
        },
        list: async (): Promise<Jogador[]> => {
            return await request.get("/jogadores/list");
        }
    }
}