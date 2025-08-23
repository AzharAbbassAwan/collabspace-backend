const { roles } = require("./roleData");

module.exports = {
  seed: async function (models, transaction) {
    try {
      const count = await models.Role.count();
      if (count > 2) {
        console.log("Roles already exist, skipping roles seeding.");
        return;
      }
      return Promise.all([models.Role.bulkCreate(roles, { transaction })]);
    } catch (error) {
      throw error;
    }
  },
};
