/**
 * Created by Nemo on 16/1/18.
 * mock 收集用户信息的中间件
 */

var q = require('q');
var cls = require('continuation-local-storage');

module.exports = function (appName) {
  return function (req, res, next) {
    var ns = cls.getNamespace(appName);
    setTimeout(function () {
      if (req.query.userId) {
        ns.set('userId', req.query.userId)
      }
      next();
    }, 100);
  };
};
