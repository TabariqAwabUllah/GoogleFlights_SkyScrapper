import axios from "axios";


// airport details, after that we can search flights
export default async function getAirports (queryParam){
    
    try {
        console.log("in getAiport 1");
        
        const response = await axios.get('https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',{
            
            params:{
                query:  queryParam,
                locale: 'en-US'
            },
            headers: {
                "x-rapidapi-key": "74ae14fffbmshc631668284f1403p12acc2jsn1f736008bb06",
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
        throw error
        
    }
}

