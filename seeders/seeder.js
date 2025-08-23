const { db } = require("../model/definition/index");
const roleSeeder = require("./roleSeeder/roleSeeder");
const permissionSeeder = require("./permissionSeeder/permissionSeeder");
const rolePermissionSeeder = require("./rolePermissionSeeder/rolePermissionSeeder");
const userSeeder = require("./userSeeder/userSeeder");
const userRoleSeeder = require("./userRoleSeeder/userRoleSeeder");
const sequelize = require("../common/databaseConnection");

async function seed() {
  try {
    const { models } = require("../model/definition");
    await db.sequelize
      .sync({ alter: true, logging: true })
      .then(() => {
        console.log("Database sync successfully");
      })
      .catch((error) => {
        console.error("Failed to sync database:", error.message);
        process.exit(1);
      });

    await sequelize.transaction(async (transaction) => {
      await roleSeeder.seed(models, transaction);
      await permissionSeeder.seed(models, transaction);
      await rolePermissionSeeder.seed(models, transaction);
      await userSeeder.seed(models, transaction);
      await userRoleSeeder.seed(models, transaction);
    });

    console.log("Seeding completed successfully");
  } catch (error) {
    console.error("Error during seeding:", error);
    throw error;
  } finally {
    await sequelize.close();
  }
}

seed().catch(console.log);
