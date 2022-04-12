'use strict';

/**
 * ryukyu-whiskey service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ryukyu-whiskey.ryukyu-whiskey');
