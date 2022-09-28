const PORT = 3000
const axios = require('axios')
const cheerio = require('cheerio')
const cors = require('cors')
const express = require('express')

const app = express()
app.use(cors())
const url = "https://apps.leg.wa.gov/rcw/default.aspx?cite=69.50.4013"


app.get('/', function(req, res) {
    res.json("This is my web scraper")
})

app.get('/results', (req, res) => {
    axios(url)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const rcw = $('#contentWrapper').text()
            // console.log(rcw)
            res.json(rcw)
        }).catch(err => console.log(err))

})



app.listen(PORT, () => console.log(`serving running on PORT ${PORT}`))