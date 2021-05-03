module.exports = {
  "globDirectory": "./dist/",
  "globPatterns": [
    "assets/images/**.*",
    "*.html",
  ],
  "swSrc": "source/misc/sw-raw.js",
  "swDest": "source/misc/sw.js",
  "globIgnores": [
    "./workbox-config.js"
  ]
};
