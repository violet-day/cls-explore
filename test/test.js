/**
 * Created by Nemo on 16/1/18.
 */

var request = require('supertest');
var _ = require('lodash');
var should = require('should');
var app = require('../index');

var userList = [
  {userId: 'u1'},
  {userId: 'u2'},
  {userId: 'u3'},
  {userId: 'u4'}
];

var testFn = function (user, url) {
  return new Promise(function (resolve) {
    request(app)
      .get(url)
      .query(user)
      .end(function (err, response) {
        if (user.userId === response.body.userId) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
  });
};


describe('cls', function () {

  describe('cls-q', function () {

    it('should lose without patch', function (done) {
      this.timeout(5000);

      Promise.all(_.times(20, function () {
          return testFn(userList[_.random(0, userList.length - 1)], '/q/without-patch/test');
        }))
        .then(function (result) {
          result.should.containEql(false);
          done();
        })
        .catch(done)

    });

    it('should not lose with patch', function (done) {
      this.timeout(5000);

      Promise.all(_.times(20, function () {
          return testFn(userList[_.random(0, userList.length - 1)], '/q/with-patch/test');
        }))
        .then(function (result) {
          result.should.matchEach(true);
          done();
        })
        .catch(done)
    });

  });

});
