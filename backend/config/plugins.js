module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
      jwtSecret: crypto.randomBytes(16).toString('base64'),
    },
  },
});