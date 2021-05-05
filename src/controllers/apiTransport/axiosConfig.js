const axios = require("axios");
require("dotenv").config();

const url = process.env.API_URL + "/api/v1/rates";

const ratesAPITransport = axios.create({
  baseURL: url,
  timeout: 5000,
});

module.exports = { ratesAPITransport };
