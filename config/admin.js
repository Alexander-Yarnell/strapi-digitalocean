module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '556fe0470768cdbb30799645114d9404'),
  },
});
