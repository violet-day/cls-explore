/**
 * Created by Nemo on 16/1/19.
 */

var Promise = require('bluebird');
var cls = require('continuation-local-storage');
var redis = require('redis');
var client = redis.createClient();
client = Promise.promisifyAll(client);

module.exports = function (app) {

  app.get('/test', function (req, res) {

    client.getAsync('testKey')
      .then(function () {
        var ns = cls.getNamespace(app.get('name'));
        var userId = ns.get('userId');

        res.send({userId: userId});
      });

  });


};