module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("problem", [
      {
        problem_id: 1,
        problem: "Battery rendah",
        batt_volt: 5200,
      },
      {
        problem_id: 2,
        problem: "Sensor arus bermaslah",
        load1: 1,
        load2: 1,
      },
      {
        problem_id: 3,
        problem: "LVD rusak",
        load1: 1,
        load2: 1,
      },
      {
        problem_id: 4,
        problem: "SCC tidak termonitor",
      },
      {
        problem_id: 5,
        problem: "SCC rusak",
      },
      {
        problem_id: 6,
        problem: "SNMP tidak termonitor",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("problem", null, {});
  },
};
