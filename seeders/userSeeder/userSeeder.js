const bcrypt = require("bcrypt");
const userData = {
  firstName: "System",
  lastName: "Admin",
  name: "System Admin",
  email: "admin@collabspace.com",
  password: "admin@123",
};
module.exports = {
  seed: async function (models, transaction) {
    try {
      const count = await models.User.count();
      if (count > 0) {
        console.log("User already exist, skipping user seeding.");
        return;
      }
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      userData.password = hashedPassword;
      return await models.User.create(userData, { transaction });
    } catch (error) {
      throw error;
    }
  },
};
