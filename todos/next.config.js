const deps = require("./package.json").dependencies;
const path = require("path");
const {
    withModuleFederation,
    MergeRuntime,
} = require("@module-federation/nextjs-mf");
var nodeExternals = require('webpack-node-externals');
module.exports = {
    externals: [nodeExternals({
        allowlist: ['react', 'react-dom']
    })],
    future: { webpack5: true },
    webpack: (config, options) => {
        const { buildId, dev, isServer, defaultLoaders, webpack } = options;
        const mfConf = {
            mergeRuntime: true, //experimental
            name: "todos",
            library: {
                type: config.output.libraryTarget,
                name: "todos",
            },
            filename: "static/runtime/remoteEntry.js",
            remotes: {
                addTodo: isServer
                    ? path.resolve(
                        __dirname,
                        "../add-todos/.next/server/static/runtime/remoteEntry.js"
                    )
                    : "addTodo",
            },
            exposes: {
            },
            react: { singleton: true, eager: true, requiredVersion: "17.0.2" },
            "react-dom": { singleton: true, eager: true, requiredVersion: "17.0.2" }
        };
        config.cache = false;
        withModuleFederation(config, options, mfConf);
        if (!isServer) {
            config.output.publicPath = "http://localhost:3002/_next/";
        }

        return config;
    },

    webpackDevMiddleware: (config) => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config;
    },
};
