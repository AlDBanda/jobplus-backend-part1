<<<<<<< HEAD
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/jobs',
      handler: 'job.find'
    }
  ]
}
=======
'use strict';

/**
 * job router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::job.job');
>>>>>>> 547c39f8 ('relations with Job')
