import http from "http"
import url from "url"

http.createServer(function(req,res) {
    res.writeHead(200, {
        'Content-Type' : 'text/plain'
    })
    let adr = 'http://localhost:8080/default.htm/shopping?year=2017&month=february'
    let q = url.parse(adr,true)
    let host = q.host;
    let pathname = q.pathname;
    let search = q.search
    let qObject = q.query;
    console.log(host)

    res.write("Hello")
    res.end()
}).listen(8001)

