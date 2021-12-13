module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cac79ed61efd045b76c26381420426d6'),
  },
});
