'use strict'

const querystring = require('querystring')

module.exports = function (results) {
  const route = results.routes[0]
  const cleanPolylines = querystring.escape(route.overview_polyline.points)
  var distanceValue = 0

  route.legs.forEach(function (item) {
    distanceValue += item.distance.value
  })

  const distanceKm = distanceValue / 1000
  const distance = distanceKm.toFixed(2).toString().replace('.', ',') + ' km'

  const staticMapUrl = 'https://maps.googleapis.com/maps/api/staticmap?size=1000x1000&path=weight:3|color:blue|enc:' + cleanPolylines

  return {
    distance: distance,
    distanceValue: distanceValue,
    staticMapUrl: staticMapUrl
  }
}
