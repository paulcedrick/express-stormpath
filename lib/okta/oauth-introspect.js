'use strict';

var requestExecutor = require('./request-executor');

function oauthIntrospect(org, authorizationServerId, clientId, accessToken, callback) {
  var req = {
    url: org + '/oauth2/' + authorizationServerId + '/v1/introspect',
    form: {
      token: accessToken,
      token_type_hint: 'access_token',
      client_id: clientId
    },
    json: true
  };
  requestExecutor(req, callback);
}

module.exports = oauthIntrospect;