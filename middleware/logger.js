/**
 * Created by Nemo on 16/1/18.
 */

var cls = require('continuation-local-storage');

var ns = cls.getNamespace(process.env.NS);

module.exports = function (req, res, next) {

  console.log('requestId:%s,useId:%s', ns.get('requestId'), ns.get('userId'));
  next();

};