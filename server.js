const http = require("http")
const dns = require("dns")
const connect = require("connect")


const app = connect()

function testDns(req, res) {
    console.log(req.url)
    console.log(typeof req.url)
    const url = req.url.substring(1)
    function dnsi(url) {
        dns.resolve(url, (erreur, adresses) => {
            if (erreur) {
                console.error('erreur', erreur)
            }
            else {
                //console.log(adresses[0])
                //return adresses[0]
                res.setHeader("Content-Type", "text/plain")
                res.end(adresses[0]);
            }
        })
    }
    dnsi(url)
}



app.use(testDns);


app.listen(3000)

