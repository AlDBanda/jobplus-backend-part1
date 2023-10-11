'use strict';

/**
 * job controller
 */

<<<<<<< HEAD
module.exports = ({ strapi }) => ({
  async find(ctx) {
    try {
      ctx.body= await strapi.service("api::job.job").find(ctx.query)
    } catch ( error) {
      strapi.log.error(error)
    }
  },
})
=======
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::job.job');
>>>>>>> 547c39f8 ('relations with Job')
