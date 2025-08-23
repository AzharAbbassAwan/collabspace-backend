const { DataTypes } = require("sequelize");
const sequelize = require("../../common/databaseConnection");
const BaseModel = require("./base");
const { Role } = require("./role");
const { Permission } = require("./permission");

class RolePermission extends BaseModel {}

RolePermission.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    roleId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Role,
        key: "id",
      },
    },
    permissionId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Permission,
        key: "id",
      },
    },
    ...BaseModel.baseAttributes(DataTypes),
  },
  {
    ...BaseModel.baseOptions(sequelize),
    tableName: "role_permission",
  }
);

module.exports = { RolePermission };
