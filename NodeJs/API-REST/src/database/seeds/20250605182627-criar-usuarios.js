const bcryptjs = require("bcryptjs");

module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "katy",
          email: "katyperry@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Brooke",
          email: "brookedavis@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Cruella",
          email: "cruelladevil@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down() {},
};
