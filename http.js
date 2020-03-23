/**
 *NODE http 模块
 */
const http = require('http');

// http 模块创建服务
/**
 * req ---- 获取url信息（request）
 * res ---- 浏览器返回响应信息（response）
 */
http
  .createServer((req, res) => {
    // 设置HTTP 头部 状态码 200 文件类型是html 字符集是utf-8
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=UTF-8'
    });
    // 网页面打印值
    res.write('<h1>NODE.js http 模块</h1>');
    // 响应结束
    res.end();
  })
  .listen(8080);
