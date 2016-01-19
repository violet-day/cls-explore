/**
 * Created by Nemo on 16/1/18.
 */

var cls = require('continuation-local-storage'),
  uuid = require('uuid');

module.exports = function (appName) {
  var ns = cls.getNamespace(appName);

  return function (req, res, next) {

    ns.bindEmitter(req);
    ns.bindEmitter(res);

    ns.run(function () {
      ns.set('requestId', uuid.v4());
      next();
    });

  }
};