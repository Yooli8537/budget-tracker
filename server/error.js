// Creates the JSON for server-side errors.
// This way, only res.json() is needed, and all logging is taken care of.
const logger = require("./logger");

function createErrorJSON(operation, errorMsg, reqestValues, detailError) {
  logger.error(
    { "Request values": reqestValues, "Detailed Error": detailError },
    `${operation}: ${errorMsg}`,
  );

  // Doesn't give back detailed error because it isn't necessary.
  return {
    operation: operation,
    errorMsg: errorMsg,
    requestValues: reqestValues,
  };
}

module.exports = createErrorJSON;
