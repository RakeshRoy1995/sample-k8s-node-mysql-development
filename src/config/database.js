const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST, // must be "mysql"
    dialect: 'mysql',
    logging: false,
  }
);

const connectDB = async () => {
  for (let i = 1; i <= 10; i++) {
    try {
      await sequelize.authenticate();
      console.log('✅ MySQL connected');
      await sequelize.sync();
      return;
    } catch (err) {
      console.log(`⏳ DB retry ${i}/10...`);
      await new Promise(res => setTimeout(res, 3000));
    }
  }

  console.error('❌ Could not connect to MySQL');
  process.exit(1);
};

module.exports = { sequelize, connectDB };
