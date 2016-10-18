'use strict'

/**
 * adonis-hashids
 *
 * (c) Carlson Orozco <carlsonorozco@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const proxyHandler = exports = module.exports = {}

/**
 * proxies the target attributes and returns defined implementation
 * for them
 *
 * @param  {Object} target
 * @param  {String} name
 *
 * @return {Mixed}
 * @public
 */
proxyHandler.get = function (target, name) {
  if (target[name]) {
    return target[name]
  }
  return target.connection('default')[name]
}
