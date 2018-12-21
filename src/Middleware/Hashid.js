'use strict'

/**
 * Middleware for auto decode the ID in route params
 */
class Hashid {
  constructor (Hashids) {
    this.Hashids = Hashids
  }

  async handle ({ request, params }, next) {
    if (params.id) {
      params.id = this.Hashids.decode(params.id)[0] || null
    }
    await next()
  }
}

module.exports = Hashid
