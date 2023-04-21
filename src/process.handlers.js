require("dotenv/config");
const fs = require("fs");

if(!fs.existsSync("./src/logs/"))fs.mkdirSync("./src/logs/",{recursive:true})
// if(!fs.existsSync("/src/logs/log.txt")) fs.writeFileSync("/")
const Log = async (line, callback = () => {}) => {
  line = `${Date.now().toString()} ${line}`;
  
  fs.writeFileSync("./src/logs/log.txt", line + "\n", {
    encoding: "utf-8",
    flag: "a+",
  });
  console.log(line);
  if (typeof callback == "function") callback();
  return line;
};

const ErrorLog = (line) => {
  const { stack } = line;
  Log(stack ? stack : line).then(async (line) => {
    fs.writeFileSync("./src/logs/errors.txt", line, {
      encoding: "utf-8",
      flag: "a+",
    });
  });
};
const RequestLog = (line) => {
  Log(line).then(async (line) => {
    fs.writeFileSync("./src/logs/requestLog.txt", line, {
      encoding: "utf-8",
      flag: "a+",
    });
  });
};

process.on("uncaughtException", (err, origin) => {
  const line = `Caught exception: ${err.message} Exception origin: ${err.stack}`;
  ErrorLog(line);
});

module.exports = {
  ErrorLog,
  RequestLog,
  Log,
};
