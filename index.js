const Email = require('./Email');

module.exports = {
  register({ app, type }) {
    let servers = {};

    Aloop.email = function (g = null) {
      g = g || 'default';
      if (!servers[g]) servers[g] = new Email(Aloop.config.email[g]);
      return servers[g];
    };
  },

  boot({ app, type }) { }
};
