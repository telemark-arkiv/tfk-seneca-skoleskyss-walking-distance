'use strict'

const envs = process.env
const lookupDistance = require('./lookup-distance')

module.exports = function (options) {
  const seneca = this

  seneca.add('role:distance, cmd:measure', lookupDistance)

  return {
    name: envs.TFK_SENECA_SKOLESKYSS_WALKING_DISTANCE_TAG || 'tfk-seneca-skoleskyss-walking-distance'
  }
}
