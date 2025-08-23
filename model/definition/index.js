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
const { OrganizationMember } = require("./organizationMember.js");
const { Organization } = require("./organization.js");
const { InviteToken } = require("./inviteToken.js");
const { Project } = require("./project.js");
const { Task } = require("./task.js");

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

// user and organization member
User.hasMany(OrganizationMember, {
  onDelete: "CASCADE",
  foreignKey: "user_id",
  as: "organizationMember",
});
OrganizationMember.belongsTo(User, {
  onDelete: "CASCADE",
  foreignKey: "user_id",
  as: "user",
});
Organization.hasMany(OrganizationMember, {
  onDelete: "CASCADE",
  foreignKey: "organization_id",
  as: "organizationMember",
});
OrganizationMember.belongsTo(Organization, {
  onDelete: "CASCADE",
  foreignKey: "organization_id",
  as: "role",
});

//organization and invite token
Organization.hasMany(InviteToken, {
  onDelete: "CASCADE",
  foreignKey: "organization_id",
  as: "organizationInvite",
});
InviteToken.belongsTo(Organization, {
  onDelete: "CASCADE",
  foreignKey: "organization_id",
  as: "organizationInvite",
});

//organization and project
Organization.hasMany(Project, {
  onDelete: "CASCADE",
  foreignKey: "organization_id",
  as: "organizationProject",
});
Project.belongsTo(Organization, {
  onDelete: "CASCADE",
  foreignKey: "organization_id",
  as: "organizationInvite",
});

//project and task
Project.hasMany(Task, {
  onDelete: "CASCADE",
  foreignKey: "project_id",
  as: "projectTask",
});
Task.belongsTo(Project, {
  onDelete: "CASCADE",
  foreignKey: "project_id",
  as: "projectTask",
});

const models = {
  User,
  Role,
  UserRole,
  Permission,
  RolePermission,
  Organization,
  OrganizationMember,
};

sequelize.models = models;
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = { db, models };
