import Dotenv from 'dotenv-webpack';

module.exports = {
  // outras configurações do webpack...
  plugins: [
    new Dotenv(),
    // outros plugins...
  ],
};
