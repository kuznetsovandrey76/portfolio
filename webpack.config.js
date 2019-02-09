// const path = require('path');
// const argv = require('yargs').argv;
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// const autoprefixer = require('autoprefixer');

// const isDevelopment = argv.mode === 'development';
// const isProduction = !isDevelopment;
// const distPath = path.join(__dirname, '/dist');

// const extractSass = new ExtractTextPlugin({
//   filename: '[name].css',
//   disable: isDevelopment
// });

// const config = {
//   entry: {
//     main: './src/js/index.js'
//   },
//   output: {
//     filename: 'bundle.js',
//     path: distPath
//   },
//   module: {
//     rules: [{
//       test: /\.js$/,
//       exclude: /node_modules/,
//       use: [{
//         loader: 'babel-loader',
//         options: {
//           presets: ['env']
//         }
//       }]
//     }, {
//       test: /\.scss$/,
//       exclude: /node_modules/,
//       use: ExtractTextPlugin.extract({
//         fallback: 'style-loader',
//         use: [{
//             loader: 'css-loader',
//             options: {
//               sourceMap: true
//             }
//         },
//         {
//           loader: 'postcss-loader',
//           options: {
//             plugins: [
//                 autoprefixer({
//                     browsers:['ie >= 11', 'last 4 version']
//                 })
//             ],
//             sourceMap: true
//           }
//         },
//         {
//           loader: 'sass-loader',
//           options: {
//             sourceMap: true,
//             includePaths: ["/images/"]
//           }
//         }]
//       })
//     }, {
//       test: /\.(gif|png|jpe?g|svg)$/i,
//       include: [
//         path.resolve(__dirname, "src/images")
//       ],
//       use: [{
//         loader: 'file-loader',
//         options: {
//           name: 'images/[name][hash].[ext]'
//         }
//       }, {
//         loader: 'image-webpack-loader',
//         options: {
//           mozjpeg: {
//             progressive: true,
//             quality: 70
//           }
//         }
//       },
//       ],
//     }, {
//       test: /\.(eot|svg|ttf|woff|woff2)$/,
//       include: [
//         path.resolve(__dirname, "src/fonts")
//       ],
//       use: {
//         loader: 'file-loader',
//         options: {
//           name: 'fonts/[name][hash].[ext]'
//         }
//       },
//     }, {
//       test: /\.(pug|jade)$/, 
//       loader: 'pug-loader',
//       options: {
//         pretty: true
//       }
//     }, {
//       test: /\.modernizrrc.js$/,
//       use: [ 'modernizr-loader' ]
//     }, {
//       test: /\.modernizrrc(\.json)?$/,
//       use: [ 'modernizr-loader', 'json-loader' ]
//     }]
//   },
//   resolve: {
//     alias: {
//       modernizr$: path.resolve(__dirname, ".modernizrrc")
//     }
//   },
//   plugins: [
//     extractSass,
//     new HtmlWebpackPlugin({
//       template: './src/index.pug'
//     }),
//     new webpack.ProvidePlugin({
//       $: 'jquery',
//       jQuery: 'jquery'
//     })
//   ],
//   optimization: isProduction ? {
//     minimizer: [
//       new UglifyJsPlugin({
//         sourceMap: true,
//         uglifyOptions: {
//           compress: {
//             inline: false,
//             warnings: false,
//             drop_console: true,
//             unsafe: true
//           },
//         },
//       }),
//     ],
//   } : {},
//   devServer: {
//     contentBase: distPath,
//     port: 9000,
//     compress: true,
//     open: true
//   }
// };

// module.exports = config;

var path = require('path');

var conf = {
    entry: {
        app: './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist/js/'),
        filename: '[name].min.js',
        publicPath: '/dist/js/'
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
            } 
        ]
    },
    devServer: {
        overlay: true
    }
};

module.exports = conf;