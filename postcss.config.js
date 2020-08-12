const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.ELEVENTY_ENV !== "dev" ? [cssnano] : []),
  ],
};