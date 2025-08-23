const { permissions } = require("./permissionData");

module.exports = {
  seed: async function (models, transaction) {
    try {
      const count = await models.Permission.count();
      if (count > 0) {
        console.log("Permissions already exist, skipping permissions seeding.");
        return;
      }
      return Promise.all([
        models.Permission.bulkCreate(permissions, { transaction }),
      ]);
    } catch (error) {
      throw error;
    }
  },
};
