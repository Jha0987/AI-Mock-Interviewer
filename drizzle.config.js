/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./utils/schema.js",
  dbCredentials:{
    url:'postgresql://neondb_owner:npg_W1yDAF3ptTgI@ep-white-pond-a82k46z0-pooler.eastus2.azure.neon.tech/mock-interview?sslmode=require'
  }
};
