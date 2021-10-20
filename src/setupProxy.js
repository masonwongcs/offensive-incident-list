const createProxyMiddleware = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://data.sa.gov.au/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/data/api",
      },
    })
  );
};
