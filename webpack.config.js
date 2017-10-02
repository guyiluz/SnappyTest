
var path = require("path");
var webpack = require("webpack");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    devtool:'cheap-module-eval-source-map',

    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
      
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
                {
                    test: /\.scss?/,
                    loader: "style-loader!css-loader!sass-loader",
                 
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                  'file?hash=sha512&digest=hex&name=[hash].[ext]',
                  'image-webpack-loader?{gifsicle: {interlaced: true}, optipng: {optimizationLevel: 7}, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
                ]
              },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader'
            }
        ],
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
    
        {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {}  
              }
            ]
          }]
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/element-react[\/\\]src[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-react/src/locale/lang/en')
      ]
};

module.exports = config;