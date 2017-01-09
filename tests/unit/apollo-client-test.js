import { module, test } from 'ember-qunit';

import {
  ApolloClient
} from 'apollo-client';

module('Unit | vendor imports | apollo-client');

test('it exports ApolloClient', function(assert) {
  assert.ok(ApolloClient);
});
