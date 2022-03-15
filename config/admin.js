module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fa7abded694b4a064ddf7c1dd5a69283'),
  },
});
