const express = require('express');
const path = require("path");
const webpack = require('webpack');
const proxy = require('http-proxy-middleware');
const webpackConfig = require('./webpack.config');
const port = 3000;
const app = express();
const compiler = webpack(webpackConfig);

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {
    }
});
const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});

app.use(devMiddleware);

app.use(hotMiddleware);

app.use(express.static(path.join(__dirname, '/public')));

app.use('/api', proxy({target: 'http://192.168.40.170:8888/', changeOrigin: true}));

app.get('/', function (req, res) {
    res.sendFile('./public/index.html');
});


app.listen(port, function () {
    console.log('Example app listening on port 3000!')
});