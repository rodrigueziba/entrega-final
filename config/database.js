const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db_post", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
  
  const startDb = async () => {
    try {
      await sequelize.authenticate();
      // await sequelize.sync({ force: true });
      await sequelize.sync();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  
module.exports = { sequelize, startDb }; 