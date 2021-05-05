const { ratesAPITransport } = require("./axiosConfig");
const getRates = async (pairs) => {
  const res = await ratesAPITransport.get("", {
    params: {
      pairs,
    },
  });
  return res;
};
module.exports = { getRates };
