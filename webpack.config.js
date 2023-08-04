const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './Eggsperience/src/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
