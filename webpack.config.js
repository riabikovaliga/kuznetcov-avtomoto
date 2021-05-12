const path = require('path');
const buildDirection = path.resolve(__dirname, 'build');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin(),
    ]
  }
  return config;
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    bundle: './index.js',
  },
  output: {
    filename: '[name].js',
    path: buildDirection,
  },
  devServer: {
    contentBase: buildDirection,
    compress: true,
    port: 2021,
    watchContentBase: true,
    historyApiFallback: true,
  },
  optimization: optimization(),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            }
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.(png|svg|gif|jpg)$/,
        exclude: [path.resolve(__dirname, './src/img/icons')],
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, './src/img/icons')],
        use: [
            'svg-sprite-loader',
            'svgo-loader'
        ]
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin({
      dry: isDev,
    }),
    new MomentLocalesPlugin({
      localesToKeep: ['es-us', 'ru'],
  }),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new SpriteLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: buildDirection,
      },
      {
        from: path.resolve(__dirname, 'src/img/content'),
        to: path.resolve(__dirname, 'build/img/content')
      },
      {
        from: path.resolve(__dirname, 'src/fonts'),
        to: path.resolve(__dirname, 'build/fonts')
      }]
    }),
  ]
}
