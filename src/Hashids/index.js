'use strict'

/**
 * adonis-hashids
 *
 * (c) Carlson Orozco <carlsonorozco@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const GE = require('@adonisjs/generic-exceptions')
const HashidsInstance = require('hashids')
const proxyHandler = require('./proxyHandler')

/**
 * Hashids class
 *
 * @namespace Adonis/Addons/Hashids
 * @singleton
 * @alias Hashids
 *
 * @class Hashids
 * @constructor
 */
class Hashids {
  constructor (Config) {
    this.Config = Config
    return new Proxy(this, proxyHandler)
  }

  /**
   * returns instance of a new factory instance for
   * a given connection
   *
   * @param  {String} [connection='']
   *
   * @return {Object} Instance of hashids
   *
   * @public
   */
  connection (connection = '') {
    connection = connection || this.Config.get('hashids.connection')
    const config = this.Config.get(`hashids.${connection}`)

    if (!config) {
      throw GE.RuntimeException.missingConfig(connection || 'configuration for hashids', 'config/hashids.js')
    }

    return new HashidsInstance(config.salt, config.length, config.alphabet)
  }
}

module.exports = Hashids
