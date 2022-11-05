const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
//Config added to prevent typeorm Entity class names to be minimified and causing circular dependencies
module.exports = (config, context) => {
  return merge(config, {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: false,
            keep_classnames: true,
          },
        }),
      ],
    },
  });
};
