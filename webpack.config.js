const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const DIR = 'z-mind-map'
module.exports = {
  mode: 'production',
  entry: './src/main.ts',
  output:{
		filename: 'z-mind-map.js',
		library:'z-mind-map',
		libraryTarget:'umd',
		path: path.resolve(__dirname,DIR),
		clean:true
	},
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
			dry: true,
			verbose: true,
			cleanStaleWebpackAssets: false,
			protectWebpackAssets: false,
			cleanOnceBeforeBuildPatterns: [
				'**/*',
				'!static-files*',
				'!directoryToExclude/**',
			],
			cleanAfterEveryBuildPatterns: ['static*.*', '!static1.js'],
			dangerouslyAllowCleanPatternsOutsideProject: true,
		})
  ]
}
