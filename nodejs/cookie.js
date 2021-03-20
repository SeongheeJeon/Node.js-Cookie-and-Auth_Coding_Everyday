var http = require("http");
var cookie = require("cookie");

http
  .createServer(function (req, res) {
    var cookies = {};
    if (req.headers.cookie !== undefined) {
      var cookies = cookie.parse(req.headers.cookie);
    }
    console.log(cookies);
    res.writeHead(200, {
      "Set-Cookie": [
        "yummy_cookie=choco",
        "tasty_cookie=strawbberry",
        `Permanent=cookie; Max-Age=${60 * 60 * 24 * 30}`,
      ],
    });
    res.end("Cookie!!");
  })
  .listen(3000);
