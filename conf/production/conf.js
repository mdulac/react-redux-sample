module.exports = {

    application: {
        mode: "production",
        log: {
            level: "info"
        }
    },

    service: {
        protocol: "https",
        host: "api.github.com",
        port: 443
    },

    middleware: {
        port: 8080
    }

};