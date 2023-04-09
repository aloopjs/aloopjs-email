const Email = require('./Email');

module.exports = {
  register({ app, type }) {
    let servers = {};

    App.email = function (g = null) {
      g = g || 'default';
      if (!servers[g]) servers[g] = new Email(App.config.email[g]);
      return servers[g];
    };
  },

  boot({ app, type }) { }
};
