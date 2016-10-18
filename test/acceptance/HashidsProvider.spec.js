'use strict'

/**
 * adonis-hashids
 *
 * (c) Carlson Orozco <carlsonorozco@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const assert = require('chai').assert
const fold = require('adonis-fold')
require('co-mocha')
require('./before')

describe('Acceptance | HashidsProvider', () => {
  describe('Ioc registration', () => {
    it('should be able to resolve/use Hashids', () => {
      assert(fold.Ioc.use('Hashids'))
    })
  })
})
