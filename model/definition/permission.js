const { DataTypes } = require("sequelize");
const sequelize = require("../../common/databaseConnection");
const BaseModel = require("./base");

class Permission extends BaseModel {}

Permission.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    ...BaseModel.baseAttributes(DataTypes),
  },
  {
    ...BaseModel.baseOptions(sequelize),
    tableName: "permission",
  }
);

module.exports = { Permission };
