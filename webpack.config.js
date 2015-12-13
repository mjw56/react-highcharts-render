module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015']
          },
          exclude: /node_modules/,
          include: __dirname
        }]
    }
};