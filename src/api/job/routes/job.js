<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6fc1a0e9 (Initial commit)
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/jobs',
      handler: 'job.find'
    }
  ]
}
<<<<<<< HEAD
=======
'use strict';

/**
 * job router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::job.job');
>>>>>>> 547c39f8 ('relations with Job')
=======
>>>>>>> 6fc1a0e9 (Initial commit)
