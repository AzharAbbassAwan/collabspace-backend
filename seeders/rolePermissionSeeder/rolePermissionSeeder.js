const rolePermissionMap = {
  Admin: [
    "manage_users",
    "manage_roles",
    "manage_permissions",
    "view_all_organizations",
    "view_dashboard",
    "update_profile",
  ],
  Manager: [
    "manage_team",
    "manage_projects",
    "view_org_reports",
    "view_dashboard",
    "update_profile",
  ],
  User: ["view_tasks", "update_tasks", "view_dashboard", "update_profile"],
};

module.exports = {
  seed: async function (models, transaction) {
    try {
      const count = await models.RolePermission.count();
      if (count > 0) {
        console.log(
          "Role Permission already exist, skipping user-role seeding."
        );
        return;
      }
      const roles = await models.Role.findAll({ transaction });
      const permissions = await models.Permission.findAll({ transaction });

      const roleMap = {};
      roles.forEach((role) => {
        roleMap[role.name] = role.id;
      });

      const permissionMap = {};
      permissions.forEach((permission) => {
        permissionMap[permission.name] = permission.id;
      });

      const rolePermissionsData = [];

      for (const [roleName, permList] of Object.entries(rolePermissionMap)) {
        const roleId = roleMap[roleName];
        if (!roleId) continue;

        for (const permName of permList) {
          const permId = permissionMap[permName];
          if (permId) {
            rolePermissionsData.push({
              roleId: roleId,
              permissionId: permId,
            });
          }
        }
      }

      await models.RolePermission.bulkCreate(rolePermissionsData, {
        transaction,
      });
      console.log("✅ Role-Permission mapping seeded successfully.");
    } catch (error) {
      await transaction.rollback();
      console.error("❌ Error seeding RolePermissions:", error);
    }
  },
};
