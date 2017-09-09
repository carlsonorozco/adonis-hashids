'use strict'

/**
 * adonis-hashids
 *
 * (c) Carlson Orozco <carlsonorozco@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const test = require('japa')
const { Config } = require('@adonisjs/sink')
const Hashids = require('../src/Hashids')
const HashidsInstance = require('hashids')

test.group('Hashids', group => {
  test('should throw exception when connection is not defined in hashids config file', assert => {
    const connection = new Hashids(new Config())
    const fn = () => connection._getConfig()
    assert.throw(fn, 'E_MISSING_CONFIG: configuration for hashids is not defined inside config/hashids.js file')
  })

  test('should return the instance of hashids when using connection method', assert => {
    const config = new Config()
    config.set('hashids', {
      connection: 'default',
      default: { salt: 'your-salt-string', length: 5, alphabet: 'abcdef1234567890' }
    })
    const hashids = new Hashids(config)
    assert.equal(hashids.connection() instanceof HashidsInstance, true)
  })

  test('should throw error when unable to find config for a given connection', assert => {
    const config = new Config()
    config.set('hashids', {
      connection: 'default',
      default: { salt: 'your-salt-string', length: 5, alphabet: 'abcdef1234567890' }
    })
    const hashids = new Hashids(config)
    const fn = () => hashids.connection('foo')
    assert.throw(fn, 'E_MISSING_CONFIG: foo is not defined inside config/hashids.js file')
  })
})
