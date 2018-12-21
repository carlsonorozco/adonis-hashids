'use strict'

/**
 * adonis-hashids
 *
 * (c) Carlson Orozco <carlsonorozco@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const { ServiceProvider } = require('@adonisjs/fold')

class HashidsProvider extends ServiceProvider {
  /**
   * Register all the required providers
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    this.app.singleton('Adonis/Addons/Hashids', app => {
      const Config = app.use('Adonis/Src/Config')
      const Hashids = require('../src/Hashids')
      return new Hashids(Config)
    })
    this.app.alias('Adonis/Addons/Hashids', 'Hashids')

    this.app.singleton('Adonis/Middleware/Hashid', app => {
      const Hashid = require('../src/Middleware/Hashid')
      return new Hashid(app.use('Adonis/Addons/Hashids'))
    })
  }
}

module.exports = HashidsProvider
