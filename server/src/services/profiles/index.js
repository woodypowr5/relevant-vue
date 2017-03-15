'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
// const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'profiles.db'),
    autoload: true
  });

  let options = {
    Model: db
  };

  // Initialize our service with any options it requires
  app.use('/profiles', service(options));

  // Get our initialize service to that we can bind hooks
  const profilesService = app.service('/profiles');

  // Set up our before hooks
  // profilesService.before(hooks.before);

  // Set up our after hooks
  // profiles.Service.after(hooks.after);
};
