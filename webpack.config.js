module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      request: "api/request.jsx",
      Camper: "app/components/Camper.jsx",
      CamperOptions: "app/components/CamperOptions.jsx",
      CamperTable: "app/components/CamperTable.jsx",
      TableTop: "app/components/TableTop.jsx",
      TableMiddle: "app/components/TableMiddle.jsx",
      TableBottom: "app/components/TableBottom.jsx"
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
