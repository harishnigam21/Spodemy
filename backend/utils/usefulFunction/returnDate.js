const { format } = require("date-fns");
const getDate = () => {
  const now = new Date();
  const dateFormat = format(now, "dd-MM-yyyy HH:mm:ss");
  return dateFormat;
};
module.exports = getDate;
