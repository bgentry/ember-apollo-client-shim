/* jshint node: true */
'use strict';

const merge = require('broccoli-merge-trees');
const path = require('path');
const WebpackWriter = require('broccoli-webpack');

module.exports = {
  name: 'ember-apollo-client-shim',

  included(app) {
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/apollo-client.js')
  },

  treeForVendor(tree) {
    const apolloClientPath = path.dirname(require.resolve('apollo-client'))
    const apolloClientTree = new WebpackWriter([ apolloClientPath ], {
      entry: './index.js',
      output: {
        library: 'apollo-client',
        libraryTarget: 'amd',
        filename: 'apollo-client.js'
      }
    });

    if (!tree) {
      return this._super.treeForVendor.call(this, apolloClientTree);
    }

    const trees = merge([apolloClientTree, tree], {
      overwrite: true
    });

    return this._super.treeForVendor.call(this, trees);
  }
};
