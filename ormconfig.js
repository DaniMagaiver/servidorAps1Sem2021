require("dotenv").config();

module.exports = {
  type: "mysql",
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["src/models/**/*.ts"],
  subscribers: ["src/subscribers/**/*.ts"],
  logging: true,
  cli: {
    entitiesDir: "src/models",
    migrationsDir: "src/database/migrations",
    subscriberDir: "src/subscriber",
  },
};
