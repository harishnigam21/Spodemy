const {format} = require("date-fns");
const getDate = () => {
  const dateFormat = format(now, "dd-MM-yyyy HH:mm:ss");
  return dateFormat;
};
module.exports = getDate;
