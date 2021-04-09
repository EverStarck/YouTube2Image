const sitemap = require("nextjs-sitemap-generator"); // Import the package
const path = require("path");

sitemap({
  baseUrl: "https://yt2img.everstarck.com",
  pagesDirectory: path.resolve(__dirname, "../out/server/pages"),
  targetDirectory: path.resolve(__dirname, "../out/server/pages"),
  ignoredExtensions: [
    "js",
    "map",
    "json",
    "xml",
    "png",
    "css",
    "jpeg",
    "jpg",
    "icon",
  ],
  ignoredPaths: ["404", "favicon", "index"],
  extraPaths: ["/"],
});

// sitemap({
//   baseUrl: "https://yt2img.everstarck.com",
//   ignoredPaths: ["404, favicon, index"],
//   extraPaths: ["/"],
//   pagesDirectory: __dirname + "\\pages",
//   targetDirectory: "static/",
//   sitemapFilename: "sitemap.xml",
//   nextConfigPath: __dirname + "\\next.config.js",
// });
