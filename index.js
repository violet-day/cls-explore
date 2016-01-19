/**
 * Created by Nemo on 16/1/18.
 */

var express = require('express');
var app = express();
var createApp = require('./createApp');

//region q-without-patch
var qWithoutPatch = createApp('q-without-patch');

require('./router/q-test')(qWithoutPatch);

app.use('/q/without-patch', qWithoutPatch);
//endregion


//region q-with-patch
var qwithPatch = createApp('q-with-patch', ['cls-q']);

require('./router/q-test')(qwithPatch);

app.use('/q/with-patch', qwithPatch);
//endregion

//region q-without-patch
var bluebirdWithoutPatch = createApp('bluebird-without-patch');

require('./router/bluebird-test')(bluebirdWithoutPatch);

app.use('/bluebird/without-patch', bluebirdWithoutPatch);
//endregion


//region bluebird-with-patch
var bluebirdWithPatch = createApp('bluebird-with-patch', ['cls-bluebird']);

require('./router/bluebird-test')(bluebirdWithPatch);

app.use('/bluebird/with-patch', bluebirdWithPatch);
//endregion


if (require.main === module) {
  app.listen(3000);
}

module.exports = app;