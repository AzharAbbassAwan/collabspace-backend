const { Model, DataTypes } = require("sequelize");

class BaseModel extends Model {
  static baseAttributes(DataTypes) {
    return {
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      deleted_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    };
  }

  static baseOptions(sequelize) {
    return {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      underscored: true,
      sequelize,
    };
  }
}

module.exports = BaseModel;
