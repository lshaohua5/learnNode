/**
 * NODE URL 模块
 */
const url = require('url');
const http = require('http');
http
  .createServer((req, res) => {
    console.log(req.url, '9999');
  })
  .listen(8081);
