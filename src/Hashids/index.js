'use strict'

/**
 * adonis-hashids
 *
 * (c) Carlson Orozco <carlsonorozco@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const NE = require('node-exceptions')
const proxyHandler = require('./proxyHandler')
const HashidsInstance = require('hashids')

class Hashids {
  /**
   * Create a new hashids instance.
   *
   * @param  {Adonis/Src/Config}  Config
   *
   */
  constructor (Config) {
    this.Config = Config
    return new Proxy(this, proxyHandler)
  }

  /**
   * returns configuration for a given connection
   * from config/hashids.js file.
   *
   * @param   {String} connection
   *
   * @return  {Object}
   *
   * @throws {RuntimeException} If default connection is not found.
   *
   * @private
   */

  _getConfig (connection) {
    if (connection === 'main') {
      connection = this.Config.get('hashids.connection')
      if (!connection) {
        throw new NE.RuntimeException('Make sure to define a default connection for hashids')
      }
    }
    return this.Config.get(`hashids.${connection}`)
  }

  /**
   * returns hashids instance for a given connection
   *
   * @param   {String} connection
   *
   * @return  {Object}
   *
   * @private
   */
  _getConnection (connection) {
    const config = this._getConfig(connection)
    if (!config) {
      throw new NE.RuntimeException(`Cannot get hashids configuration for ${connection} connection`)
    }
    return new HashidsInstance(config.salt, config.length, config.alphabet)
  }

  /**
   * returns instance of a new factory instance for
   * a given connection
   *
   * @param  {String} [connection=default]
   *
   * @return {Object} Instance of hashids
   *
   * @public
   */
  connection (connection) {
    connection = connection || 'default'
    return this._getConnection(connection)
  }
}

module.exports = Hashids
