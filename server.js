const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');
const express = require('express');
const winston = require('winston');

const appConf = require('./conf/conf');
const webpackConfig = require('./webpack.' + appConf.application.mode + '.config');

var logger = new winston.Logger({
    level: appConf.application.log.level,
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: 'server.' + appConf.application.mode + '.log'})
    ]
});

const app = new (express)();

const options = {
    target: appConf.service.protocol + '://' + appConf.service.host + ':' + appConf.service.port,
    pathRewrite: {
        '^/api/': '/'
    },
    changeOrigin: true,
    logLevel: appConf.middleware.logLevel
};

const proxy = proxyMiddleware(appConf.middleware.context, options);

const compiler = webpack(webpackConfig);

logger.info("NODE_ENV: ", process.env.NODE_ENV);
logger.info("BABEL_ENV: ", process.env.BABEL_ENV);

if (appConf.application.mode === "development") {
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');

    logger.debug("Development mode: enable hot reloading");

    app.use(webpackDevMiddleware(compiler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath
        }
    ));

    app.use(webpackHotMiddleware(compiler));
}

app.use(proxy);
app.use('/static', express.static(__dirname + '/dist'));

app.get(/^((?!\/api).)*$/, function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(appConf.middleware.port, function (error) {
    if (error) {
        logger.error(error);
    } else {
        logger.info("Listening on port %s", appConf.middleware.port);
    }
});