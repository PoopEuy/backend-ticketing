module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("solusi", [
      {
        solusi_id: 1,
        problem_id: 1,
        solusi: "Cek solar panel",
      },
      {
        solusi_id: 2,
        problem_id: 1,
        solusi: "Pembersihan solar panel",
      },
      {
        solusi_id: 3,
        problem_id: 2,
        solusi: "Ganti sensor arus",
      },
      {
        solusi_id: 4,
        problem_id: 2,
        solusi: "Ganti wiring",
      },
      {
        solusi_id: 5,
        problem_id: 3,
        solusi: "Ganti wiring",
      },
      {
        solusi_id: 6,
        problem_id: 4,
        solusi: "Periksa kabel SCC",
      },
      {
        solusi_id: 7,
        problem_id: 4,
        solusi: "Ganti SCC",
      },
      {
        solusi_id: 8,
        problem_id: 4,
        solusi: "Ganti Ehub",
      },
      {
        solusi_id: 9,
        problem_id: 5,
        solusi: "Cek visual SCC",
      },
      {
        solusi_id: 10,
        problem_id: 5,
        solusi: "Ganti SCC",
      },
      {
        solusi_id: 11,
        problem_id: 6,
        solusi: "Cek visual kabel LAN",
      },
      {
        solusi_id: 12,
        problem_id: 6,
        solusi: "Restart Ehub",
      },
      {
        solusi_id: 13,
        problem_id: 6,
        solusi: "Ganti Ehub",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("solusi", null, {});
  },
};
