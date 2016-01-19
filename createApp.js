/**
 * Created by Nemo on 16/1/18.
 */
var cls = require('continuation-local-storage');
var express = require('express');
var requestId = require('./middleware/requestId');
var userId = require('./middleware/userId');

module.exports = function (appName, patchs) {
  patchs = patchs || [];

  var ns = cls.createNamespace(appName);

  patchs.forEach(function (patch) {
    require(patch)(ns);
  });

  var app = express();

  app.set('name', appName);

  app.use(requestId(appName));
  app.use(userId(appName));

  return app;
};