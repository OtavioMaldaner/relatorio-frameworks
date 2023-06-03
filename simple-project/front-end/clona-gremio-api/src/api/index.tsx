import axios from 'axios';
import cors from 'cors';
import { Jogador, credit_card, players_array_length } from './types';
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
    general: {
        getLength: async (): Promise<players_array_length> => {
            const response = await request.get('jogadores/');
            if (response.status === 200) {
                return response.data;
            } else  {
                return {
                    jogadores: 0,
                    nabas: 0
                };
            }
        }
    },
    jogadores: {
        get: async (id: number): Promise<Jogador> => {
            const response = await request.get(`jogadores/get/${id}`);
            if (response.status === 200) {
                return response.data;
            } else {
                return {
                    image: '',
                    name: '',
                    position: ''
                }
            }
        },
        getTest: async (cc: credit_card): Promise<Jogador> => {
            const response = await request.post('jogadores/get', {credit_card: cc});
            if (response.status === 200) {
                return response.data;
            } else {
                return {
                    image: '',
                    name: '',
                    position: ''
                }
            }
        }
    },
    nabas: {
        get: async (id: number): Promise<Jogador> => {
            const response = await request.get(`nabas/get/${id}`);
            if (response.status === 200) {
                return response.data;
            } else {
                return {
                    image: '',
                    name: '',
                    position: ''
                }
            }
        }
    }
}