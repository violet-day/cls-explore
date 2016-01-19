/**
 * Created by Nemo on 16/1/18.
 */
var q = require('q');
var cls = require('continuation-local-storage');

module.exports = function (app) {

  app.get('/test', function (req, res) {
    q.delay(1)
      .then(function () {
        var ns = cls.getNamespace(app.get('name'));
        var userId = ns.get('userId');

        res.send({userId: userId});
      });

  });


};