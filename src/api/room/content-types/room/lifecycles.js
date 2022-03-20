const { default: axios } = require("axios");

module.exports = {
  afterCreate(event) {
    axios.post(
      `https://lararooms-com-fe-nvyrs9izi-roberto-lararoomsco.vercel.app/api/revalidate?secret=${process.env.MY_SECRET_TOKEN}`
    );
  },
  afterUpdate(event) {
    axios.post(
      `https://lararooms-com-fe-nvyrs9izi-roberto-lararoomsco.vercel.app/api/revalidate?secret=${process.env.MY_SECRET_TOKEN}`
    );
  },
  afterDelete(event) {
    axios.post(
      `https://lararooms-com-fe-nvyrs9izi-roberto-lararoomsco.vercel.app/api/revalidate?secret=${process.env.MY_SECRET_TOKEN}`
    );
  },
};
