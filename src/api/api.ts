import axios, { AxiosError, AxiosResponse } from "axios";
import { Moment } from "moment";
import { Matches } from "../models/matches.interface";

const API_URL = () : string => {
    if (process.env.NODE_ENV === "development") {
        return "http://localhost:8080"
    }
    
    return "https://pending-matches.onrender.com"
};


const instance = axios.create({
    baseURL: API_URL(),
    timeout: 60000,
    headers: {
        "Content-type": "application/json"
      }
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string, params: { date: string }) => instance.get(url, {params})
                                                                .then(responseBody)
                                                                .catch((err: Error | AxiosError) => {
                                                                    console.log("error in api call");
                                                                    throw err
                                                                }),
};

export const Match = {
    getMatchesV1: (date: Moment, gamesList: string[]): Promise<Matches[]> => {
        const params = {
            date: date.format("YYYY-MM-DD"),
            games: gamesList.toString()
        }
        return requests.get('/api/v1/matches', params);
    },
};
