const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    entry: {
        main: path.resolve(__dirname, "./src/index.js")
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Irga City",
            template: path.resolve(__dirname, "./public/index.html"),
            filename: "index.html"
        }),
        new MiniCssExtractPlugin()
    ],

    resolve: {
        extensions: [".js", ".jsx"],
    },

    module: {

        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    },
                    "sass-loader"
                ],
                include: /\.module\.(css)$/,
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
                exclude: /\.module\.(css)$/,
            },
            {
                test: /\.(gif|png|jpg|svg)$/,
                loader: "file-loader"
            }
        ]
    },

    devtool: "source-map",

};