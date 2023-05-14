module.exports={
    mode: "development",
    entry: "./app.js",
    watch: true,
    module:{
        rules:[
            {
            test:/\.js/,  //If any files end with .js load babel for that.
            loader: "babel-loader",
            exclude: /node_modules/, //If a file end with node-modules, exclude that
            options:{
                presets: ['@babel/preset-react']
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader","css-loader","sass-loader",],
                exclude: /node_modules/
            },

        ]
    }
}