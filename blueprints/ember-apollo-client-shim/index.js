/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-apollo-client-shim',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-graphql-shim' },
        { name: 'ember-browserify' }
      ]
    })
    .then(() => {
      return this.addPackagesToProject([
        { name: 'apollo-client', target: '^0.6.0' },
        { name: 'graphql', target: '^0.8.2' }
      ]);
    });
  }
};
