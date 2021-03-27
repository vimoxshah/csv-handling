const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "csvfile-handling",
  brokers: ["localhost:9092"],
});

module.exports = kafka;
