// Custom logger: prefixes messages with a timestamp and log level.
const logger = {
  log(level, message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  },
  info(message) {
    this.log("info", message);
  },
  warn(message) {
    this.log("warn", message);
  },
  error(message) {
    this.log("error", message);
  },
};
