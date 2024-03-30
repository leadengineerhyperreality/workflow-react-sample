/* eslint-disable no-undef */

// Connect to redis using env variables
const redis = require("redis");

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

client.on("error", (err) => console.log("Redis Client Error", err));

client.on("connect", () => console.log("Redis Client Connected to Server"));

client.connect();

// Set a value
client.set("mykey", "Hello World!");

setTimeout(() => {
  client.get("mykey", (err, value) => {
    console.log(value);
    client.quit();
  });
}, 5000);

console.log("Redis script invoked");
