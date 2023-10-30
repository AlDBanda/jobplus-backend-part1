'use strict';

/**
 * job-type controller
 */



module.exports = ({ strapi }) => ({
  async find(ctx) {
    try {
      ctx.body = await strapi.service("api::job.job").find(ctx.query)
    } catch ( error ) {
      strapi.log.error(error)
    }
  },
})
