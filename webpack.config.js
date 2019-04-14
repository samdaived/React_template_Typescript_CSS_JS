const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

const rules=[
    {
        test:/\.tsx?/,
        exclude:/node_modules/,
        use:{
            loader:"babel-loader"
        }
    },
    {
        test:/\.css?/,
        exclude:/node_modules/,
        use: ["style-loader", "css-loader"]
      
    },
    {
        test:/\.js?/,
        exclude:/node_modules/,
        use:"babel-loader"
      
    }
];

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  });

module.exports={
    target:"web",
    mode:"development",
    entry:"./src/index.tsx",
    output:{
        path:path.resolve(__dirname,'build'),
        filename:"bundle.js"
    },
    module:{rules},
    resolve:{extensions:['.js','.tsx','.ts']},
    devServer:{
        contentBase:'./',
        port:8080
    },
    plugins:[htmlPlugin]
}