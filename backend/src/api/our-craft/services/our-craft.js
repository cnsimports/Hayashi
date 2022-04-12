'use strict';

/**
 * our-craft service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-craft.our-craft');
