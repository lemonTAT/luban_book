const request = require('request');

request.get({ url: 'http://www.google.com', proxy: 'http://127.0.0.1:7890', timeout: 30000 }, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body);
  } else {
    console.log(error);
  }
});
