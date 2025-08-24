const { models } = require("../model/definition");

module.exports = {
  getUser: async function (filter) {
    return await models.User.findOne({
      where: filter,
    });
  },
};
