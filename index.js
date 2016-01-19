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


//region q-witch-patch
var qWitchPatch = createApp('q-witch-patch', ['cls-q']);

require('./router/q-test')(qWitchPatch);

app.use('/q/with-patch', qWitchPatch);
//endregion


if (require.main === module) {
  app.listen(3000);
}

module.exports = app;