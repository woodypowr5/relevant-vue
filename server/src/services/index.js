'use strict';
const posts = require('./posts');
const authentication = require('./authentication');
const user = require('./user');
const profiles = require('./profiles');
const messages = require('./messages');

module.exports = function() {
  const app = this;

  app.configure(authentication);
  app.configure(user);
  app.configure(posts);
  app.configure(profiles);
  app.configure(messages);
};
