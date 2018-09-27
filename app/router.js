'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  
  // restful
  router.resources('prePublish', '/api/prepublish', controller.prePublish);
};
