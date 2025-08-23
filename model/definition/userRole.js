const { DataTypes } = require("sequelize");
const sequelize = require("../../common/databaseConnection");
const BaseModel = require("./base");
const { User } = require("./user");
const { Role } = require("./role");

class UserRole extends BaseModel {}

UserRole.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
      },
    },
    roleId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Role,
        key: "id",
      },
    },
    organizationId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    ...BaseModel.baseAttributes(DataTypes),
  },
  {
    ...BaseModel.baseOptions(sequelize),
    tableName: "user_role",
  }
);

module.exports = { UserRole };
