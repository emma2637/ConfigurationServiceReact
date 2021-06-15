
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware("/api/Account/authenticate", { target: "https://myaccounts-intg.navyfederal.org/ConfigurationServiceApi", changeOrigin: true, }));
};