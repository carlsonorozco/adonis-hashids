'use strict'

/**
 * adonis-hashids
 *
 * (c) Carlson Orozco <carlsonorozco@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const path = require('path')

module.exports = async function (cli) {
  try {
    await cli.copy(
      path.join(__dirname, './example/hashids.js'),
      path.join(cli.helpers.configPath(), 'hashids.js')
    )
    cli.command.completed('create', 'config/hashids.js')
  } catch (error) {
    // ignore error
  }
}
