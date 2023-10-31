'use strict';

/**
 * job controller
 */

module.exports = ({ strapi }) => ({
  async find (ctx) {
    console.log('ctx', ctx);
     try {
      ctx.body  = 'Hello World';
     } catch ( error ) {
      strapi.log.error(error)
     }
  },
})
