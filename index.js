// Node.js cors avoiding server

var request = require('request').defaults({
    encoding: null
})

var app = require('express')();
app.use(require('cors')());

var port = 8080
var counter = 0

app.get('/', (req, res) => {
    console.log(req.url)
    console.log(req.query.url)
    var url = req.query.url
    if (url) {
        console.log(url)
        request({
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36'
            }
        }, function (error, response, html) {
            if (error) res.send(error)
            else res.send(html)
        });
    } else res.send('', 404)
    counter += 1
    console.log('Request count : ' + counter)
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});
