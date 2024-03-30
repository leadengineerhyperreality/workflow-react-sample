/* eslint-disable no-undef */

// Connect to redis using env variables
const redis = require("redis");

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

client.on("error", (err) => console.log("Redis Client Error", err));

client.on("connect", () => {
  console.log("Redis Client Connected to Server");
  client.set("mykey", "Hello World!");

  client.get("mykey", (err, value) => {
    console.log(value);
    client.quit();
  });
});

client.connect();

// Set a value

setTimeout(() => {
  console.log("Forced exit");
  process.exit(0);
}, 5000);

console.log("Redis script invoked");
