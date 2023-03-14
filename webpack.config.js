const path = require('path');

module.exports = {
    entry: [
        __dirname + '/assets/js/app.js',
        __dirname + '/assets/css/app.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'js/app.min.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [],
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'css/',
                            name: '[name].min.css'
                        }
                    },
                    'sass-loader'
                ],
            }
        ]
    }
};