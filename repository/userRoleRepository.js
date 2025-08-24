const { models } = require("../model/definition");

module.exports = {
  getUserRole: async function (filter) {
    return await models.UserRole.findAll({
      Where: filter,
      include: [
        {
          model: models.Role,
          as: "role",
          include: [
            {
              model: models.RolePermission,
              as: "rolePermission",
              include: [
                {
                  model: models.Permission,
                  as: "permission",
                },
              ],
            },
          ],
        },
      ],
    });
  },
};
