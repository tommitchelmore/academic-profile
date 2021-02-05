const autoprefixer = require("autoprefixer");

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-import'),
        //require('@fullhuman/postcss-purgecss')({
        //    content: ["./index.html"],
        //    defaultExtractor: (c) => c.match(/[A-Za-z0-9-_:/]+/g) || [],
        //}),
        require('cssnano')
    ]
  }