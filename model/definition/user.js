const { DataTypes } = require("sequelize");
const sequelize = require("../../common/databaseConnection");
const BaseModel = require("./base");
const { getUserStatus } = require("../../common/enumFunction");

class User extends BaseModel {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    disableDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    oauthProvider: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    oauthId: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
    },
    statusValue: {
      type: DataTypes.VIRTUAL,
      get() {
        return getUserStatus(this.getDataValue("status"));
      },
    },

    ...BaseModel.baseAttributes(DataTypes),
  },
  {
    ...BaseModel.baseOptions(sequelize),
    tableName: "user",
    indexes: [],
  }
);
module.exports = { User };
