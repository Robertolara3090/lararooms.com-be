const { default: axios } = require("axios");

module.exports = {
  afterCreate(event) {
    axios.get(
      `https://lararooms.com/api/revalidate?secret=${process.env.MY_SECRET_TOKEN}`
    );
  },
  afterUpdate(event) {
    axios.get(
      `https://lararooms.com/api/revalidate?secret=${process.env.MY_SECRET_TOKEN}`
    );
  },
  afterDelete(event) {
    axios.get(
      `https://lararooms.com/api/revalidate?secret=${process.env.MY_SECRET_TOKEN}`
    );
  },
};
