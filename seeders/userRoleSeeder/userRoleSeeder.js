module.exports = {
  seed: async function (models, transaction) {
    try {
      const count = await models.UserRole.count();
      if (count > 0) {
        console.log("User Role already exist, skipping user-role seeding.");
        return;
      }
      const user = await models.User.findOne({ transaction });
      const role = await models.Role.findOne({ transaction });
      return await models.UserRole.create(
        {
          roleId: role.id,
          userId: user.id,
        },
        { transaction }
      );
    } catch (error) {
      console.error("Error seeding user role:", error);
      throw error;
    }
  },
};
