module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["0f5cfd6ee8d82c20", "875520464836e598"]),
  },
});
