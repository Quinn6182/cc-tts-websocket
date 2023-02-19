const fs = require('fs')
exports.logInfo = function(to_log) {
    console.log("[INFO] " + to_log)
    fs.appendFileSync("log.txt", "[INFO] " + to_log + "\n")
}