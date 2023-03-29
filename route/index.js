const express = require('express');
const router = express.Router();
const MapService = require('../service/map.service')

router.post('/googlemaplocation', MapService.getApiData)

module.exports =  router;