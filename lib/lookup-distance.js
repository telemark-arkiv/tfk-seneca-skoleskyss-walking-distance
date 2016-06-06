'use strict'

const Wreck = require('wreck')
const querystring = require('querystring')
const envs = process.env
const repackResults = require('./repack-results')
const apiUrl = envs.TFK_SENECA_SKOLESKYSS_WALKING_DISTANCE_API_URI || 'https://maps.googleapis.com/maps/api/directions/json'
const apiKey = envs.TFK_SENECA_SKOLESKYSS_WALKING_DISTANCE_API_KEY || 'yourApiKey'

module.exports = function (args, callback) {
  
  var options = {
    origin: args.origin,
    destination: args.destination,
    mode: 'walking',
    key: apiKey
  }

  const wreckOptions = {
    json: true
  }

  if (args.waypoints) {
    options.waypoints = args.waypoints.join('|')
  }

  const url = apiUrl + '?' + querystring.stringify(options)

  Wreck.get(url, wreckOptions, function (error, response, payload) {
    if (error) {
      callback(error, null)
    } else {
      callback(null, repackResults(payload))
    }
  })
}
