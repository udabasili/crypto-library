const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development'


module.exports = {
  entry : './index.js',
  output : {
      path : path.resolve(__dirname , 'build'),
      filename: 'crypto-library-lib.js',
      libraryTarget: 'commonjs2'
  },
  module : {
      rules : [
          {test : /\.(js)$/, use:'babel-loader'},
      ]
  },

}