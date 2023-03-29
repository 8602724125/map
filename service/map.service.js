const {Client} = require("@googlemaps/google-maps-services-js");
const client = new Client({});
// const axios = require('axios');
// const instance = axios.create({
//     baseURL: "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
//     timeout: 1000,
//     params: {
//      apikey: process.env.API_KEY
//     }
// })

// var config = {
//     method: 'get',
//     url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY',
//     headers: { }
//   };

require('dotenv').config();

// const googleMapsClient = require('@google/maps').createClient({
//     key: 'your API key here'
//   });

MapService = {
    getApiData: async (req, res) => {
        const data = await req.headers;
        console.log("data: ", data);
        // res.send("successfully")
       try {
        client
            .elevation({
                params: {
                key: process.env.API_KEY,
                locations: { lat: data.latitude, lng: data.longitude },
                },
                timeout: 1000, // milliseconds
            })
            .then((r) => {
                console.log("result: ", result)
                // console.log(r.data.results[0].elevation);
                res.send("successfully")
            })
            .catch((e) => {
                console.log("e: ", e)
                // console.log(e.response.data.error_message);
            });
        } catch (ex) {
            console.log("ex: ", ex)
            res.send({status: 200, error: ex})
        }

        // googleMapsClient
        // .elevation({
        //     locations: [{ lat: data.latitude, lng: data.longitude }]
        // })
        // .asPromise()
        // .then(function(r) {
        //     console.log(r.json.results[0].elevation);
        // })
        // .catch(e => {
        // console.log(e);
        // });
    }
}


module.exports = MapService;