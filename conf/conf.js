const _ = require('lodash');

module.exports = _.merge(
    {
        application: {
            log: {
                level: "info"
            }
        },

        middleware: {
            protocol: "http",
            host: "localhost",
            port: 3000,
            context: "/api/"
        }
    },
    require('./' + process.env.NODE_ENV + '/conf.js')
);