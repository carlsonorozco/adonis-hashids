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

class CommandsProvider extends ServiceProvider {
  * register () {
    this.app.bind(`Adonis/Commands/Hashids:Config`, (app) => {
      const Helpers = app.use('Adonis/Src/Helpers')
      const Generator = require(`../src/Commands/ConfigGenerator`)
      return new Generator(Helpers)
    })
  }
}

module.exports = CommandsProvider
