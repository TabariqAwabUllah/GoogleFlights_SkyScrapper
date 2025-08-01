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

const flights = {
  "status": true,
  "timestamp": 1691008981566,
  "sessionId": "25cee707-a873-4d0a-aeb2-4128a7ca0258",
  "data": {
    "context": {
      "status": "incomplete",
      "totalResults": 10
    },
    "itineraries": [
      {
        "id": "13542-2402201235--30598-0-12712-2402201550|12712-2402221810--30598-0-13542-2402230600",
        "price": {
          "raw": 419.18,
          "formatted": "$420"
        },
        "legs": [
          {
            "id": "13542-2402201235--30598-0-12712-2402201550",
            "origin": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 495,
            "stopCount": 0,
            "isSmallestStops": false,
            "departure": "2024-02-20T12:35:00",
            "arrival": "2024-02-20T15:50:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -30598,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/I%29.png",
                  "name": "Norse Atlantic Airways (UK)"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13542-12712-2402201235-2402201550--30598",
                "origin": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T12:35:00",
                "arrival": "2024-02-20T15:50:00",
                "durationInMinutes": 495,
                "flightNumber": "701",
                "marketingCarrier": {
                  "id": -30598,
                  "name": "Norse Atlantic Airways (UK)",
                  "alternateId": "I)",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -30598,
                  "name": "Norse Atlantic Airways (UK)",
                  "alternateId": "I)",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402221810--30598-0-13542-2402230600",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 410,
            "stopCount": 0,
            "isSmallestStops": false,
            "departure": "2024-02-22T18:10:00",
            "arrival": "2024-02-23T06:00:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -30598,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/I%29.png",
                  "name": "Norse Atlantic Airways (UK)"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-13542-2402221810-2402230600--30598",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "departure": "2024-02-22T18:10:00",
                "arrival": "2024-02-23T06:00:00",
                "durationInMinutes": 410,
                "flightNumber": "702",
                "marketingCarrier": {
                  "id": -30598,
                  "name": "Norse Atlantic Airways (UK)",
                  "alternateId": "I)",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -30598,
                  "name": "Norse Atlantic Airways (UK)",
                  "alternateId": "I)",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "eco": {
          "ecoContenderDelta": 13.232994
        },
        "tags": [
          "cheapest",
          "shortest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.998502
      },
      {
        "id": "13554-2402200750--32753-1-12712-2402201355|12712-2402222110--32753-1-13554-2402231130",
        "price": {
          "raw": 527.97,
          "formatted": "$528"
        },
        "legs": [
          {
            "id": "13554-2402200750--32753-1-12712-2402201355",
            "origin": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 665,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T07:50:00",
            "arrival": "2024-02-20T13:55:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13554-11154-2402200750-2402200910--32753",
                "origin": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T07:50:00",
                "arrival": "2024-02-20T09:10:00",
                "durationInMinutes": 80,
                "flightNumber": "151",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201110-2402201355--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T11:10:00",
                "arrival": "2024-02-20T13:55:00",
                "durationInMinutes": 465,
                "flightNumber": "105",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402222110--32753-1-13554-2402231130",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 560,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T21:10:00",
            "arrival": "2024-02-23T11:30:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402222110-2402230850--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T21:10:00",
                "arrival": "2024-02-23T08:50:00",
                "durationInMinutes": 400,
                "flightNumber": "106",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13554-2402231010-2402231130--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "departure": "2024-02-23T10:10:00",
                "arrival": "2024-02-23T11:30:00",
                "durationInMinutes": 80,
                "flightNumber": "158",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "second_cheapest",
          "second_shortest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.58567
      },
      {
        "id": "13554-2402200750--32753-1-12712-2402201355|12712-2402221700--32753-1-13554-2402230805",
        "price": {
          "raw": 527.97,
          "formatted": "$528"
        },
        "legs": [
          {
            "id": "13554-2402200750--32753-1-12712-2402201355",
            "origin": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 665,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T07:50:00",
            "arrival": "2024-02-20T13:55:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13554-11154-2402200750-2402200910--32753",
                "origin": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T07:50:00",
                "arrival": "2024-02-20T09:10:00",
                "durationInMinutes": 80,
                "flightNumber": "151",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201110-2402201355--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T11:10:00",
                "arrival": "2024-02-20T13:55:00",
                "durationInMinutes": 465,
                "flightNumber": "105",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402221700--32753-1-13554-2402230805",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 605,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T17:00:00",
            "arrival": "2024-02-23T08:05:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402221700-2402230425--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T17:00:00",
                "arrival": "2024-02-23T04:25:00",
                "durationInMinutes": 385,
                "flightNumber": "104",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13554-2402230640-2402230805--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "departure": "2024-02-23T06:40:00",
                "arrival": "2024-02-23T08:05:00",
                "durationInMinutes": 85,
                "flightNumber": "152",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "second_cheapest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.564918
      },
      {
        "id": "13542-2402201300--32753-1-12712-2402201940|12712-2402221700--32753-1-13542-2402230755",
        "price": {
          "raw": 529.03,
          "formatted": "$530"
        },
        "legs": [
          {
            "id": "13542-2402201300--32753-1-12712-2402201940",
            "origin": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 700,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T13:00:00",
            "arrival": "2024-02-20T19:40:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13542-11154-2402201300-2402201425--32753",
                "origin": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T13:00:00",
                "arrival": "2024-02-20T14:25:00",
                "durationInMinutes": 85,
                "flightNumber": "237",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201640-2402201940--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T16:40:00",
                "arrival": "2024-02-20T19:40:00",
                "durationInMinutes": 480,
                "flightNumber": "107",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402221700--32753-1-13542-2402230755",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 595,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T17:00:00",
            "arrival": "2024-02-23T07:55:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402221700-2402230425--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T17:00:00",
                "arrival": "2024-02-23T04:25:00",
                "durationInMinutes": 385,
                "flightNumber": "104",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13542-2402230630-2402230755--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "departure": "2024-02-23T06:30:00",
                "arrival": "2024-02-23T07:55:00",
                "durationInMinutes": 85,
                "flightNumber": "230",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "third_cheapest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.552902
      },
      {
        "id": "13554-2402201215--32753-1-12712-2402201940|12712-2402222110--32753-1-13554-2402231130",
        "price": {
          "raw": 527.97,
          "formatted": "$528"
        },
        "legs": [
          {
            "id": "13554-2402201215--32753-1-12712-2402201940",
            "origin": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 745,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T12:15:00",
            "arrival": "2024-02-20T19:40:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13554-11154-2402201215-2402201335--32753",
                "origin": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T12:15:00",
                "arrival": "2024-02-20T13:35:00",
                "durationInMinutes": 80,
                "flightNumber": "159",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201640-2402201940--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T16:40:00",
                "arrival": "2024-02-20T19:40:00",
                "durationInMinutes": 480,
                "flightNumber": "107",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402222110--32753-1-13554-2402231130",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 560,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T21:10:00",
            "arrival": "2024-02-23T11:30:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402222110-2402230850--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T21:10:00",
                "arrival": "2024-02-23T08:50:00",
                "durationInMinutes": 400,
                "flightNumber": "106",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13554-2402231010-2402231130--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "departure": "2024-02-23T10:10:00",
                "arrival": "2024-02-23T11:30:00",
                "durationInMinutes": 80,
                "flightNumber": "158",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "second_cheapest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.549767
      },
      {
        "id": "13542-2402201300--32753-1-12712-2402201940|12712-2402222110--32753-1-13542-2402231220",
        "price": {
          "raw": 529.03,
          "formatted": "$530"
        },
        "legs": [
          {
            "id": "13542-2402201300--32753-1-12712-2402201940",
            "origin": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 700,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T13:00:00",
            "arrival": "2024-02-20T19:40:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13542-11154-2402201300-2402201425--32753",
                "origin": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T13:00:00",
                "arrival": "2024-02-20T14:25:00",
                "durationInMinutes": 85,
                "flightNumber": "237",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201640-2402201940--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T16:40:00",
                "arrival": "2024-02-20T19:40:00",
                "durationInMinutes": 480,
                "flightNumber": "107",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402222110--32753-1-13542-2402231220",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 610,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T21:10:00",
            "arrival": "2024-02-23T12:20:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402222110-2402230850--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T21:10:00",
                "arrival": "2024-02-23T08:50:00",
                "durationInMinutes": 400,
                "flightNumber": "106",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13542-2402231055-2402231220--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "departure": "2024-02-23T10:55:00",
                "arrival": "2024-02-23T12:20:00",
                "durationInMinutes": 85,
                "flightNumber": "236",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "third_cheapest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.546571
      },
      {
        "id": "13554-2402201215--32753-1-12712-2402201940|12712-2402221700--32753-1-13554-2402230805",
        "price": {
          "raw": 527.97,
          "formatted": "$528"
        },
        "legs": [
          {
            "id": "13554-2402201215--32753-1-12712-2402201940",
            "origin": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 745,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T12:15:00",
            "arrival": "2024-02-20T19:40:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13554-11154-2402201215-2402201335--32753",
                "origin": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T12:15:00",
                "arrival": "2024-02-20T13:35:00",
                "durationInMinutes": 80,
                "flightNumber": "159",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201640-2402201940--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T16:40:00",
                "arrival": "2024-02-20T19:40:00",
                "durationInMinutes": 480,
                "flightNumber": "107",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402221700--32753-1-13554-2402230805",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 605,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T17:00:00",
            "arrival": "2024-02-23T08:05:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402221700-2402230425--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T17:00:00",
                "arrival": "2024-02-23T04:25:00",
                "durationInMinutes": 385,
                "flightNumber": "104",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13554-2402230640-2402230805--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "departure": "2024-02-23T06:40:00",
                "arrival": "2024-02-23T08:05:00",
                "durationInMinutes": 85,
                "flightNumber": "152",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "second_cheapest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.531441
      },
      {
        "id": "13554-2402200950--32753-1-11442-2402201605|11442-2402221735--32753-1-13554-2402230805",
        "price": {
          "raw": 578.71,
          "formatted": "$579"
        },
        "legs": [
          {
            "id": "13554-2402200950--32753-1-11442-2402201605",
            "origin": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "EWR",
              "name": "New York Newark",
              "displayCode": "EWR",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 675,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T09:50:00",
            "arrival": "2024-02-20T16:05:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13554-11154-2402200950-2402201115--32753",
                "origin": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T09:50:00",
                "arrival": "2024-02-20T11:15:00",
                "durationInMinutes": 85,
                "flightNumber": "155",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-11442-2402201305-2402201605--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "EWR",
                  "displayCode": "EWR",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York Newark",
                  "type": "Airport"
                },
                "departure": "2024-02-20T13:05:00",
                "arrival": "2024-02-20T16:05:00",
                "durationInMinutes": 480,
                "flightNumber": "101",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "11442-2402221735--32753-1-13554-2402230805",
            "origin": {
              "id": "EWR",
              "name": "New York Newark",
              "displayCode": "EWR",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 570,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T17:35:00",
            "arrival": "2024-02-23T08:05:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "11442-11154-2402221735-2402230510--32753",
                "origin": {
                  "flightPlaceId": "EWR",
                  "displayCode": "EWR",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York Newark",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T17:35:00",
                "arrival": "2024-02-23T05:10:00",
                "durationInMinutes": 395,
                "flightNumber": "100",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13554-2402230640-2402230805--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "departure": "2024-02-23T06:40:00",
                "arrival": "2024-02-23T08:05:00",
                "durationInMinutes": 85,
                "flightNumber": "152",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "third_shortest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.525736
      },
      {
        "id": "13542-2402201105--32753-1-12712-2402201940|12712-2402221700--32753-1-13542-2402230755",
        "price": {
          "raw": 529.03,
          "formatted": "$530"
        },
        "legs": [
          {
            "id": "13542-2402201105--32753-1-12712-2402201940",
            "origin": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 815,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T11:05:00",
            "arrival": "2024-02-20T19:40:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13542-11154-2402201105-2402201230--32753",
                "origin": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T11:05:00",
                "arrival": "2024-02-20T12:30:00",
                "durationInMinutes": 85,
                "flightNumber": "233",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201640-2402201940--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T16:40:00",
                "arrival": "2024-02-20T19:40:00",
                "durationInMinutes": 480,
                "flightNumber": "107",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402221700--32753-1-13542-2402230755",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 595,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T17:00:00",
            "arrival": "2024-02-23T07:55:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402221700-2402230425--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T17:00:00",
                "arrival": "2024-02-23T04:25:00",
                "durationInMinutes": 385,
                "flightNumber": "104",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13542-2402230630-2402230755--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "departure": "2024-02-23T06:30:00",
                "arrival": "2024-02-23T07:55:00",
                "durationInMinutes": 85,
                "flightNumber": "230",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "third_cheapest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.507807
      },
      {
        "id": "13542-2402201105--32753-1-12712-2402201940|12712-2402222110--32753-1-13542-2402231220",
        "price": {
          "raw": 529.03,
          "formatted": "$530"
        },
        "legs": [
          {
            "id": "13542-2402201105--32753-1-12712-2402201940",
            "origin": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 815,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T11:05:00",
            "arrival": "2024-02-20T19:40:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13542-11154-2402201105-2402201230--32753",
                "origin": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T11:05:00",
                "arrival": "2024-02-20T12:30:00",
                "durationInMinutes": 85,
                "flightNumber": "233",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201640-2402201940--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T16:40:00",
                "arrival": "2024-02-20T19:40:00",
                "durationInMinutes": 480,
                "flightNumber": "107",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402222110--32753-1-13542-2402231220",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 610,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T21:10:00",
            "arrival": "2024-02-23T12:20:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402222110-2402230850--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T21:10:00",
                "arrival": "2024-02-23T08:50:00",
                "durationInMinutes": 400,
                "flightNumber": "106",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13542-2402231055-2402231220--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "departure": "2024-02-23T10:55:00",
                "arrival": "2024-02-23T12:20:00",
                "durationInMinutes": 85,
                "flightNumber": "236",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "third_cheapest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.502462
      }
    ],
    "messages": [],
    "filterStats": {
      "duration": {
        "min": 495,
        "max": 815
      },
      "airports": [
        {
          "city": "New York",
          "airports": [
            {
              "id": "JFK",
              "name": "New York John F. Kennedy"
            },
            {
              "id": "EWR",
              "name": "New York Newark"
            }
          ]
        },
        {
          "city": "London",
          "airports": [
            {
              "id": "LGW",
              "name": "London Gatwick"
            },
            {
              "id": "LHR",
              "name": "London Heathrow"
            }
          ]
        }
      ],
      "carriers": [
        {
          "id": -32753,
          "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
          "name": "Aer Lingus"
        },
        {
          "id": -30598,
          "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/I%29.png",
          "name": "Norse Atlantic Airways (UK)"
        }
      ],
      "stopPrices": {
        "direct": {
          "isPresent": true,
          "formattedPrice": "$420"
        },
        "one": {
          "isPresent": true,
          "formattedPrice": "$528"
        },
        "twoOrMore": {
          "isPresent": false
        }
      }
    }
  }
}

const flightDetails = {
  "status": true,
  "timestamp": 1691009267165,
  "data": {
    "itinerary": {
      "legs": [
        {
          "id": "13542-2402201235--30598-0-12712-2402201550",
          "origin": {
            "id": "13542",
            "name": "London Gatwick",
            "displayCode": "LGW",
            "city": "London"
          },
          "destination": {
            "id": "12712",
            "name": "New York John F. Kennedy",
            "displayCode": "JFK",
            "city": "New York"
          },
          "segments": [
            {
              "id": "13542-12712-2402201235-2402201550--30598",
              "origin": {
                "id": "13542",
                "name": "London Gatwick",
                "displayCode": "LGW",
                "city": "London"
              },
              "destination": {
                "id": "12712",
                "name": "New York John F. Kennedy",
                "displayCode": "JFK",
                "city": "New York"
              },
              "duration": 495,
              "dayChange": 0,
              "flightNumber": "Z0701",
              "departure": "2024-02-20T12:35:00",
              "arrival": "2024-02-20T15:50:00",
              "marketingCarrier": {
                "id": "-30598",
                "name": "Norse Atlantic Airways (UK)",
                "displayCode": "Z0",
                "displayCodeType": "IATA",
                "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                "altId": "I)"
              },
              "operatingCarrier": {
                "id": "-30598",
                "name": "Norse Atlantic Airways (UK)",
                "displayCode": "Z0",
                "displayCodeType": "IATA",
                "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                "altId": "I)"
              }
            }
          ],
          "duration": 495,
          "stopCount": 0,
          "departure": "2024-02-20T12:35:00",
          "arrival": "2024-02-20T15:50:00",
          "dayChange": 0
        }
      ],
      "pricingOptions": [
        {
          "agents": [
            {
              "id": "arus",
              "name": "Mytrip",
              "isCarrier": false,
              "bookingProposition": "PBOOK",
              "url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/arus/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=270.99&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mJJLCotFmLmuKUixczRo6vQcP38OjYjJgVGAC7vlo8cAAAA|8736221224533380069|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:04&pqid=true",
              "price": 270.99,
              "rating": {
                "value": 3.01,
                "count": 9532
              },
              "updateStatus": "CURRENT",
              "segments": [
                {
                  "id": "13542-12712-2402201235-2402201550--30598",
                  "origin": {
                    "id": "13542",
                    "name": "London Gatwick",
                    "displayCode": "LGW",
                    "city": "London"
                  },
                  "destination": {
                    "id": "12712",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York"
                  },
                  "duration": 495,
                  "dayChange": 0,
                  "flightNumber": "Z0701",
                  "departure": "2024-02-20T12:35:00",
                  "arrival": "2024-02-20T15:50:00",
                  "marketingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  },
                  "operatingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  }
                }
              ],
              "isDirectDBookUrl": false,
              "quoteAge": 3
            }
          ],
          "totalPrice": 270.99
        },
        {
          "agents": [
            {
              "id": "edus",
              "name": "eDreams",
              "isCarrier": false,
              "bookingProposition": "PBOOK",
              "url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/edus/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=272.81&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mJJTSktFmLmuKUixczRo6vQcP38OjYjJgVGAEeFKAocAAAA|589607429926384355|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:08&pqid=true",
              "price": 272.81,
              "rating": {
                "value": 2.63,
                "count": 10415
              },
              "updateStatus": "CURRENT",
              "segments": [
                {
                  "id": "13542-12712-2402201235-2402201550--30598",
                  "origin": {
                    "id": "13542",
                    "name": "London Gatwick",
                    "displayCode": "LGW",
                    "city": "London"
                  },
                  "destination": {
                    "id": "12712",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York"
                  },
                  "duration": 495,
                  "dayChange": 0,
                  "flightNumber": "Z0701",
                  "departure": "2024-02-20T12:35:00",
                  "arrival": "2024-02-20T15:50:00",
                  "marketingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  },
                  "operatingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  }
                }
              ],
              "isDirectDBookUrl": false,
              "quoteAge": 3
            }
          ],
          "totalPrice": 272.81
        },
        {
          "agents": [
            {
              "id": "xpus",
              "name": "Expedia",
              "isCarrier": false,
              "bookingProposition": "PBOOK",
              "url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/xpus/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|QEL|Q|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=277.98&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mKpKCgtFmLmuKUixczRo6vQcP38OjYjJgVGAGMaQ04cAAAA|-2471706304482540542|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:15&pqid=true",
              "price": 277.98,
              "rating": {
                "value": 3.96,
                "count": 12563
              },
              "updateStatus": "CURRENT",
              "segments": [
                {
                  "id": "13542-12712-2402201235-2402201550--30598",
                  "origin": {
                    "id": "13542",
                    "name": "London Gatwick",
                    "displayCode": "LGW",
                    "city": "London"
                  },
                  "destination": {
                    "id": "12712",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York"
                  },
                  "duration": 495,
                  "dayChange": 0,
                  "flightNumber": "Z0701",
                  "departure": "2024-02-20T12:35:00",
                  "arrival": "2024-02-20T15:50:00",
                  "marketingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  },
                  "operatingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  }
                }
              ],
              "isDirectDBookUrl": false,
              "quoteAge": 3
            }
          ],
          "totalPrice": 277.98
        },
        {
          "agents": [
            {
              "id": "noaa",
              "name": "Norse Atlantic Airways",
              "isCarrier": true,
              "bookingProposition": "PBOOK",
              "url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/noaa/1/13542.12712.2024-02-20/air/airli/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=277.98&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mLJy09MFGLmeJYpxcyxIlmh4fr5dWxGTAqMAAEFxrgcAAAA|-2328735851777417191|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:01&pqid=false",
              "price": 277.98,
              "rating": {
                "value": 3.61,
                "count": 689
              },
              "updateStatus": "CURRENT",
              "segments": [
                {
                  "id": "13542-12712-2402201235-2402201550--30598",
                  "origin": {
                    "id": "13542",
                    "name": "London Gatwick",
                    "displayCode": "LGW",
                    "city": "London"
                  },
                  "destination": {
                    "id": "12712",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York"
                  },
                  "duration": 495,
                  "dayChange": 0,
                  "flightNumber": "Z0701",
                  "departure": "2024-02-20T12:35:00",
                  "arrival": "2024-02-20T15:50:00",
                  "marketingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  },
                  "operatingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  }
                }
              ],
              "isDirectDBookUrl": false,
              "quoteAge": 3
            }
          ],
          "totalPrice": 277.98
        },
        {
          "agents": [
            {
              "id": "orbz",
              "name": "Orbitz",
              "isCarrier": false,
              "bookingProposition": "PBOOK",
              "url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/orbz/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|QEL|Q|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=277.98&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mLJL0qqEmLmuKUixczRo6vQcP38OjYjJgVGACl_oJscAAAA|-2471706304482540542|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:15&pqid=true",
              "price": 277.98,
              "rating": {
                "value": 1.89,
                "count": 1882
              },
              "updateStatus": "CURRENT",
              "segments": [
                {
                  "id": "13542-12712-2402201235-2402201550--30598",
                  "origin": {
                    "id": "13542",
                    "name": "London Gatwick",
                    "displayCode": "LGW",
                    "city": "London"
                  },
                  "destination": {
                    "id": "12712",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York"
                  },
                  "duration": 495,
                  "dayChange": 0,
                  "flightNumber": "Z0701",
                  "departure": "2024-02-20T12:35:00",
                  "arrival": "2024-02-20T15:50:00",
                  "marketingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  },
                  "operatingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  }
                }
              ],
              "isDirectDBookUrl": false,
              "quoteAge": 3
            }
          ],
          "totalPrice": 277.98
        },
        {
          "agents": [
            {
              "id": "tlcy",
              "name": "Travelocity",
              "isCarrier": false,
              "bookingProposition": "PBOOK",
              "url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/tlcy/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|QEL|Q|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=277.98&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mIpyUmuFGLmuKUixczRo6vQcP38OjYjJgVGALHE7-4cAAAA|-2471706304482540542|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:17&pqid=true",
              "price": 277.98,
              "rating": {
                "value": 1.67,
                "count": 467
              },
              "updateStatus": "CURRENT",
              "segments": [
                {
                  "id": "13542-12712-2402201235-2402201550--30598",
                  "origin": {
                    "id": "13542",
                    "name": "London Gatwick",
                    "displayCode": "LGW",
                    "city": "London"
                  },
                  "destination": {
                    "id": "12712",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York"
                  },
                  "duration": 495,
                  "dayChange": 0,
                  "flightNumber": "Z0701",
                  "departure": "2024-02-20T12:35:00",
                  "arrival": "2024-02-20T15:50:00",
                  "marketingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  },
                  "operatingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  }
                }
              ],
              "isDirectDBookUrl": false,
              "quoteAge": 3
            }
          ],
          "totalPrice": 277.98
        },
        {
          "agents": [
            {
              "id": "skyp",
              "name": "Kiwi.com",
              "isCarrier": false,
              "bookingProposition": "PBOOK",
              "url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/skyp/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=280.00&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mIpzq4sEGLmuKUixczRo6vQcP38OjYjJgVGAEFEgi0cAAAA|-2328735851777417191|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:09&pqid=true",
              "price": 280,
              "rating": {
                "value": 2.92,
                "count": 12352
              },
              "updateStatus": "CURRENT",
              "segments": [
                {
                  "id": "13542-12712-2402201235-2402201550--30598",
                  "origin": {
                    "id": "13542",
                    "name": "London Gatwick",
                    "displayCode": "LGW",
                    "city": "London"
                  },
                  "destination": {
                    "id": "12712",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York"
                  },
                  "duration": 495,
                  "dayChange": 0,
                  "flightNumber": "Z0701",
                  "departure": "2024-02-20T12:35:00",
                  "arrival": "2024-02-20T15:50:00",
                  "marketingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  },
                  "operatingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  }
                }
              ],
              "isDirectDBookUrl": false,
              "quoteAge": 3
            }
          ],
          "totalPrice": 280
        },
        {
          "agents": [
            {
              "id": "pcln",
              "name": "Priceline",
              "isCarrier": false,
              "bookingProposition": "PBOOK",
              "url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/pcln/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|QEL|Q|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=279.08&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mIpSM7JE2LmuKUixczRo6vQcP38OjYjJgVGAJINcA8cAAAA|836989890372451239|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:04&pqid=false",
              "price": 279.08,
              "rating": {
                "value": 1.87,
                "count": 2029
              },
              "updateStatus": "CURRENT",
              "segments": [
                {
                  "id": "13542-12712-2402201235-2402201550--30598",
                  "origin": {
                    "id": "13542",
                    "name": "London Gatwick",
                    "displayCode": "LGW",
                    "city": "London"
                  },
                  "destination": {
                    "id": "12712",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York"
                  },
                  "duration": 495,
                  "dayChange": 0,
                  "flightNumber": "Z0701",
                  "departure": "2024-02-20T12:35:00",
                  "arrival": "2024-02-20T15:50:00",
                  "marketingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  },
                  "operatingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  }
                }
              ],
              "isDirectDBookUrl": false,
              "quoteAge": 3
            }
          ],
          "totalPrice": 279.08
        },
        {
          "agents": [
            {
              "id": "cust",
              "name": "Trip.com",
              "isCarrier": false,
              "bookingProposition": "PBOOK",
              "url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/cust/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=282.00&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mJJLi0uEWLmuKUixczRo6vQcP38OjYjJgVGAFdnAjscAAAA|-1392380853158557016|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:08&pqid=true",
              "price": 282,
              "rating": {
                "value": 3.67,
                "count": 30283
              },
              "updateStatus": "CURRENT",
              "segments": [
                {
                  "id": "13542-12712-2402201235-2402201550--30598",
                  "origin": {
                    "id": "13542",
                    "name": "London Gatwick",
                    "displayCode": "LGW",
                    "city": "London"
                  },
                  "destination": {
                    "id": "12712",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York"
                  },
                  "duration": 495,
                  "dayChange": 0,
                  "flightNumber": "Z0701",
                  "departure": "2024-02-20T12:35:00",
                  "arrival": "2024-02-20T15:50:00",
                  "marketingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  },
                  "operatingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  }
                }
              ],
              "isDirectDBookUrl": false,
              "quoteAge": 3
            }
          ],
          "totalPrice": 282
        },
        {
          "agents": [
            {
              "id": "jfus",
              "name": "JustFly",
              "isCarrier": false,
              "bookingProposition": "PBOOK",
              "url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/jfus/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|QEL|Q|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=282.98&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mLJSistFmLmuKUixczRo6vQcP38OjYjJgVGAGddqwQcAAAA|836989890372451239|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:06&pqid=false",
              "price": 282.98,
              "rating": {
                "value": 3.38,
                "count": 6951
              },
              "updateStatus": "CURRENT",
              "segments": [
                {
                  "id": "13542-12712-2402201235-2402201550--30598",
                  "origin": {
                    "id": "13542",
                    "name": "London Gatwick",
                    "displayCode": "LGW",
                    "city": "London"
                  },
                  "destination": {
                    "id": "12712",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York"
                  },
                  "duration": 495,
                  "dayChange": 0,
                  "flightNumber": "Z0701",
                  "departure": "2024-02-20T12:35:00",
                  "arrival": "2024-02-20T15:50:00",
                  "marketingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  },
                  "operatingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  }
                }
              ],
              "isDirectDBookUrl": false,
              "quoteAge": 3
            }
          ],
          "totalPrice": 282.98
        },
        {
          "agents": [
            {
              "id": "chpo",
              "name": "CheapOair",
              "isCarrier": false,
              "bookingProposition": "PBOOK",
              "url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/chpo/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=283.98&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mJJzijIF2LmuKUixczRo6vQcP38OjYjJgVGAEPdlo0cAAAA|-2328735851777417191|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:11&pqid=false",
              "price": 283.98,
              "rating": {
                "value": 2.57,
                "count": 3276
              },
              "updateStatus": "CURRENT",
              "segments": [
                {
                  "id": "13542-12712-2402201235-2402201550--30598",
                  "origin": {
                    "id": "13542",
                    "name": "London Gatwick",
                    "displayCode": "LGW",
                    "city": "London"
                  },
                  "destination": {
                    "id": "12712",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York"
                  },
                  "duration": 495,
                  "dayChange": 0,
                  "flightNumber": "Z0701",
                  "departure": "2024-02-20T12:35:00",
                  "arrival": "2024-02-20T15:50:00",
                  "marketingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  },
                  "operatingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  }
                }
              ],
              "isDirectDBookUrl": false,
              "quoteAge": 3
            }
          ],
          "totalPrice": 283.98
        },
        {
          "agents": [
            {
              "id": "bcom",
              "name": "Booking.com",
              "isCarrier": false,
              "bookingProposition": "PBOOK",
              "url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/bcom/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=285.99&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mJJSs7PFWLmuKUixczRo6vQcP38OjYjJgVGAAORRuscAAAA|3610398678000586459|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:04&pqid=true",
              "price": 285.99,
              "rating": {
                "value": 3.63,
                "count": 7583
              },
              "updateStatus": "CURRENT",
              "segments": [
                {
                  "id": "13542-12712-2402201235-2402201550--30598",
                  "origin": {
                    "id": "13542",
                    "name": "London Gatwick",
                    "displayCode": "LGW",
                    "city": "London"
                  },
                  "destination": {
                    "id": "12712",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York"
                  },
                  "duration": 495,
                  "dayChange": 0,
                  "flightNumber": "Z0701",
                  "departure": "2024-02-20T12:35:00",
                  "arrival": "2024-02-20T15:50:00",
                  "marketingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  },
                  "operatingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  }
                }
              ],
              "isDirectDBookUrl": false,
              "quoteAge": 3
            }
          ],
          "totalPrice": 285.99
        },
        {
          "agents": [
            {
              "id": "vaya",
              "name": "BudgetAir",
              "isCarrier": false,
              "bookingProposition": "PBOOK",
              "url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/vaya/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|-|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=286.00&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mIpS6xMFGLmuKUixczRo6vQcP38OjYjJgVGAIS-sPwcAAAA|589607429926384355|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:16&pqid=true",
              "price": 286,
              "rating": {
                "value": 2.85,
                "count": 5155
              },
              "updateStatus": "CURRENT",
              "segments": [
                {
                  "id": "13542-12712-2402201235-2402201550--30598",
                  "origin": {
                    "id": "13542",
                    "name": "London Gatwick",
                    "displayCode": "LGW",
                    "city": "London"
                  },
                  "destination": {
                    "id": "12712",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York"
                  },
                  "duration": 495,
                  "dayChange": 0,
                  "flightNumber": "Z0701",
                  "departure": "2024-02-20T12:35:00",
                  "arrival": "2024-02-20T15:50:00",
                  "marketingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  },
                  "operatingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  }
                }
              ],
              "isDirectDBookUrl": false,
              "quoteAge": 3
            }
          ],
          "totalPrice": 286
        },
        {
          "agents": [
            {
              "id": "bfus",
              "name": "Bravofly",
              "isCarrier": false,
              "bookingProposition": "PBOOK",
              "url": "https://www.skyscanner.net/transport_deeplink/4.0/US/en-US/USD/bfus/1/13542.12712.2024-02-20/air/trava/flights?itinerary=flight|-30598|701|13542|2024-02-20T12:35|12712|2024-02-20T15:50|495|-|Q|-&carriers=-30598&operators=-30598&passengers=1&channel=iphone&cabin_class=economy&fps_session_id=423a83ad-3665-45a4-b02d-d2890051d50f&ticket_price=287.37&is_npt=false&is_multipart=false&client_id=skyscanner_app&request_id=dccc6832-c515-44a9-8e9e-93a7c7b2f3b7&q_ids=H4sIAAAAAAAA_-OS4mJJSistFmLmuKUixczRo6vQcP38OjYjJgVGANlhptYcAAAA|-6737075005787650101|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-08-02T20:45:02&pqid=true",
              "price": 287.37,
              "rating": {
                "value": 2.69,
                "count": 2763
              },
              "updateStatus": "CURRENT",
              "segments": [
                {
                  "id": "13542-12712-2402201235-2402201550--30598",
                  "origin": {
                    "id": "13542",
                    "name": "London Gatwick",
                    "displayCode": "LGW",
                    "city": "London"
                  },
                  "destination": {
                    "id": "12712",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York"
                  },
                  "duration": 495,
                  "dayChange": 0,
                  "flightNumber": "Z0701",
                  "departure": "2024-02-20T12:35:00",
                  "arrival": "2024-02-20T15:50:00",
                  "marketingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  },
                  "operatingCarrier": {
                    "id": "-30598",
                    "name": "Norse Atlantic Airways (UK)",
                    "displayCode": "Z0",
                    "displayCodeType": "IATA",
                    "logo": "https://logos.skyscnr.com/images/airlines/favicon/I).png",
                    "altId": "I)"
                  }
                }
              ],
              "isDirectDBookUrl": false,
              "quoteAge": 3
            }
          ],
          "totalPrice": 287.37
        }
      ],
      "isTransferRequired": false,
      "destinationImage": "https://content.skyscnr.com/b62fd4346123d1eb9f7525c8f72f2a8a/stock-photo-new-york-city-at-twilight-128894587.jpg",
      "operatingCarrierSafetyAttributes": [
        {
          "carrierID": "-30598",
          "carrierName": "Norse Atlantic Airways (UK)",
          "faceMasksCompulsory": null,
          "aircraftDeepCleanedDaily": null,
          "attendantsWearPPE": null,
          "cleaningPacksProvided": null,
          "foodServiceChanges": null,
          "safetyUrl": null
        }
      ],
      "flexibleTicketPolicies": []
    },
    "pollingCompleted": true
  }
}
// flight details
export async function searchFlights(fromDetails, toDetails) {
    console.log("flights API");
    
    // try {
    //     const flights = await axios.get(`${baseUrl}api/v2/flights/searchFlights`,{
    //         params :{
    //             originSkyId: fromDetails.originSkyId,
    //             destinationSkyId: toDetails.originSkyId,
    //             originEntityId: fromDetails.originEntityId,
    //             destinationEntityId: toDetails.originEntityId,
    //             date: fromDetails.date
    //         },
    //         headers:{
    //             "x-rapidapi-key": API_KEY,
    //             'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
    //         }
    //     })
    //     console.log("flights data: ", flights.data);
        
    //     return(flights)
    // } catch (error) {
    //     // console.log("error in getFlights", error);
    // }

    console.log("in flights api", flights);
    
    // hard coded
    return flights
}


// function for booking of a flight 
export async function getFlightDetails(sessionIdParam, itineraryIdParam, legsParam) {
    console.log("in getFlightDetails");
    
    // try {
    //     const flightDetails = await axios.get(`${baseUrl}v1/flights/getFlightDetails`, {
    //         params: {
    //             legs: legsParam,
    //             itineraryId: itineraryIdParam,
    //             sessionId: sessionIdParam,
    //         },
    //         headers: {
    //             'x-rapidapi-key':API_KEY,
    //             'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
    //         }
    //     })
    //     return flightDetails
    // } catch (error) {
    //     console.log("Error in getFlightDetails", error);
        
    // }


    return flightDetails
}

