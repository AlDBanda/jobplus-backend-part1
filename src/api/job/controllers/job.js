'use strict';

/**
 * job controller
 */

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6fc1a0e9 (Initial commit)
module.exports = ({ strapi }) => ({
  async find(ctx) {
    try {
      ctx.body= await strapi.service("api::job.job").find(ctx.query)
    } catch ( error) {
      strapi.log.error(error)
    }
  },
})
<<<<<<< HEAD
=======
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::job.job');
>>>>>>> 547c39f8 ('relations with Job')
=======
>>>>>>> 6fc1a0e9 (Initial commit)
