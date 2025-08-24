const { DataTypes } = require("sequelize");
const sequelize = require("../../common/databaseConnection");
const BaseModel = require("./base");
const { Organization } = require("./organization");

class InviteToken extends BaseModel {}

InviteToken.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    organizationId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Organization,
        key: "id",
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("Admin", "Manager", "User"),
      allowNull: false,
      defaultValue: "User",
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ...BaseModel.baseAttributes(DataTypes),
  },
  {
    ...BaseModel.baseOptions(sequelize),
    tableName: "invite_token",
  }
);

module.exports = { InviteToken };
