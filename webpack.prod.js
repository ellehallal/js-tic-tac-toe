const path = require('path');

module.exports = {
  entry: './src/index.js', // this defines the file which acts as the entry point between our logic files and webpage (minimises so that it loads faster)
  mode: 'production',
  output: {
    filename: 'main.js', // output file, this is where the entry point unloads all the js to webpage
    path: path.resolve(__dirname, 'dist'),
  },
};
