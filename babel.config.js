module.exports =  {
    "ignore": [
        "node_modules/**/*",
    ],
    "plugins": [
        "@babel/plugin-transform-modules-commonjs",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-runtime",
    ],
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
    ]
}
