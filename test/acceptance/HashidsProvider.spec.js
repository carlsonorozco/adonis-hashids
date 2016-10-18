'use strict'

/**
 * adonis-hashids
 *
 * (c) Carlson Orozco <carlsonorozco@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

/* eslint-env mocha */

const assert = require('chai').assert
const fold = require('adonis-fold')
require('co-mocha')

describe('Acceptance | HashidsProvider', () => {
  before(require('./before'))

  describe('Ioc registration', () => {
    it('should be able to resolve/use Hashids', () => {
      assert(fold.Ioc.use('Hashids'))
    })
  })
})
