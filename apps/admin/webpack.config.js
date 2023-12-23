const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');

const plugins = [withNx(), withReact({ svgr: true })];

module.exports = composePlugins(...plugins, (config, { options, context }) => {
    // customize webpack config here
    return config;
});
