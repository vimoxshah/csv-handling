const kafka = require("../config/kafka");
const producer = kafka.producer();

const sendMessage = async (row) => {
  console.log(
    "🚀 ~ file: csv.controllers.js ~ line 41 ~ sendMessage ~ row",
    row
  );
  await producer.connect();
  await producer.send({
    topic: "csv-record",
    messages: [{ value: JSON.stringify(row) }],
  });
};

module.exports = { sendMessage };
