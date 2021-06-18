const path = require("path");
const {
    MergeRuntime,
    withModuleFederation,
} = require("@module-federation/nextjs-mf");

module.exports = {
    future: { webpack5: true },
    webpack: (config, options) => {
        const { buildId, dev, isServer, defaultLoaders, webpack } = options;
        const mfConf = {
            mergeRuntime: true, //experimental
            name: "addTodo",
            library: {
                type: config.output.libraryTarget,
                name: "addTodo",
            },
            filename: "static/runtime/remoteEntry.js",
            exposes: {
                // "./AddTodo": "./components/AddTodo",
                "./SiteHeader": "./components/SiteHeader"
            },
            remotes: {
            },
        };
        config.cache = false;
        if (!isServer) {
            config.output.publicPath = "http://localhost:3002/_next/";
        }

        withModuleFederation(config, options, mfConf);
        return config;
    },
    webpackDevMiddleware: (config) => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config;
    },
};
