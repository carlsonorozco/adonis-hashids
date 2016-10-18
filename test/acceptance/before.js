'use strict'

/**
 * adonis-hashids
 *
 * (c) Carlson Orozco <carlsonorozco@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const config = require('./config')
const fold = require('adonis-fold')
const path = require('path')

module.exports = done => {
  const providers = [
    path.join(__dirname, '../../providers/HashidsProvider')
  ]

  fold.Registrar
    .register(providers)
    .then(() => {
      fold.Ioc.aliases({ Hashids: 'Adonis/Addons/Hashids' })

      fold.Ioc.fake('Adonis/Src/Config', () => {
        return {
          get: function (key, defaultValue) {
            return config[ key ] || defaultValue
          }
        }
      })

      done()
    })
}
