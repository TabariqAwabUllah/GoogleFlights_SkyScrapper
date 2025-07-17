import axios from "axios";
import { API_KEY } from '@env'


const baseUrl = 'https://sky-scrapper.p.rapidapi.com/'
// airport details, after that we can search flights
export async function getAirports (queryParam){
    
    try {
        console.log("in getAiport 1");
        
        const response = await axios.get(`${baseUrl}api/v1/flights/searchAirport`,{
            
            params:{
                query:  queryParam,
                locale: 'en-US'
            },
            headers: {
                "x-rapidapi-key": API_KEY,
                "x-rapidapi-host": "sky-scrapper.p.rapidapi.com"
            },
            
        })
        console.log("in airport 2");
        
        // console.log("Respnse", response);
        // console.log("Response.date", response.data);
        
        // console.log("response in getAirport", response);
        return response.data;
        
        
    } catch (error) {
        console.log("error in getAirports:",error);
        // throw error
        
    }
}

export async function getFlights(fromDetails, toDetails) {
    console.log("flights API");
    
    try {
        const flights = await axios.get(`${baseUrl}api/v2/flights/searchFlights`,{
            params :{
                originSkyId: fromDetails.originSkyId,
                destinationSkyId: toDetails.originSkyId,
                originEntityId: fromDetails.originEntityId,
                destinationEntityId: toDetails.originEntityId,
                date: fromDetails.date
            },
            headers:{
                "x-rapidapi-key": API_KEY,
                'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
            }
        })
        console.log("flights data: ", flights.data);
        
        return(flights.data)
    } catch (error) {
        // console.log("error in getFlights", error);
    }
}

