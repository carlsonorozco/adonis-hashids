'use strict'

/**
 * adonis-hashids
 *
 * (c) Carlson Orozco <carlsonorozco@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const ServiceProvider = require('adonis-fold').ServiceProvider

class HashidsProvider extends ServiceProvider {

  * register () {
    this.app.singleton('Adonis/Addons/Hashids', function (app) {
      const Config = app.use('Adonis/Src/Config')
      const Hashids = require('../src/Hashids')
      return new Hashids(Config)
    })
  }

}

module.exports = HashidsProvider
