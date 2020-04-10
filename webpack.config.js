const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development'


module.exports = {
  entry : './app/index.js',
  output : {
      path : path.resolve(__dirname , 'build'),
      filename: 'index_bundle.js',
      libraryTarget: 'commonjs2'
  },
  module : {
      rules : [
          {test : /\.(js)$/, use:'babel-loader'},
      ]
  },

}