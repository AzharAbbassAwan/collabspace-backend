const { Sequelize } = require("sequelize");
const sequelize = require("../../common/databaseConnection");
var config = require("../../config/config.js");
const db = {};
config = config.db;

const { User } = require("./user.js");
const { Role } = require("./role.js");
const { UserRole } = require("./userRole.js");
const { Permission } = require("./permission.js");
const { RolePermission } = require("./rolePermission.js");

// user and userRole
User.hasMany(UserRole, {
  onDelete: "CASCADE",
  foreignKey: "user_id",
  as: "userRoles",
});
UserRole.belongsTo(User, {
  onDelete: "CASCADE",
  foreignKey: "user_id",
  as: "user",
});
Role.hasMany(UserRole, {
  onDelete: "CASCADE",
  foreignKey: "role_id",
  as: "userRoles",
});
UserRole.belongsTo(Role, {
  onDelete: "CASCADE",
  foreignKey: "role_id",
  as: "role",
});

//role and rolePermission
Role.hasMany(RolePermission, {
  onDelete: "CASCADE",
  foreignKey: "role_id",
  as: "rolePermission",
});
RolePermission.belongsTo(Role, {
  onDelete: "CASCADE",
  foreignKey: "role_id",
  as: "role",
});

//permission and rolePermission
Permission.hasMany(RolePermission, {
  onDelete: "CASCADE",
  foreignKey: "permission_id",
  as: "rolePermission",
});
RolePermission.belongsTo(Permission, {
  onDelete: "CASCADE",
  foreignKey: "permission_id",
  as: "permission",
});

const models = {
  User,
  Role,
  UserRole,
  Permission,
  RolePermission,
};

sequelize.models = models;
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = { db, models };
