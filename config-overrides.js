const path = require('path');
const {
  override,
  fixBabelImports,
  addBundleVisualizer,
  addWebpackResolve,
  addWebpackAlias,
  useEslintRc,
} = require('customize-cra');

const addWorkerLoader = () => config => {
  config.module.rules.push({
    test: /^((?!typescript|editor).)*\.worker\.js$/,
    use: { loader: 'worker-loader' },
  });
  return config;
};

module.exports = override(
  useEslintRc(),
  fixBabelImports('lodash', {
    libraryDirectory: '',
    camel2DashComponentName: false,
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWorkerLoader(),
  addBundleVisualizer({}, true),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
  }),
);
