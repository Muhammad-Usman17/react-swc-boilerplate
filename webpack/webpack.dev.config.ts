import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

const config = {
  mode: 'development',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.([jt]sx?)?$/,
        use: 'swc-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      aliasFields: ['browser'],
      Components: path.resolve(__dirname, '../', 'src/component/'),
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      fix: true,
      emitWarning: true,
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: { directory: path.join(__dirname, '../', 'public') },
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
};

export default config;
