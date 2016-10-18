'use strict'

/**
 * adonis-hashids
 *
 * (c) Carlson Orozco <carlsonorozco@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const config = module.exports = {}

config[ 'hashids.default' ] = 'default'
config[ 'hashids.default' ] = {
  salt: 'Salted Caramel Cookie Dough',
  length: 5,
  alphabet: '0123456789abcdef'
}
