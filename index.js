const PORT = 3000
const axios = require('axios')
const cheerio = require('cheerio')
const cors = require('cors')
const express = require('express')

const app = express()
app.use(cors())

const urls = [
    "https://apps.leg.wa.gov/rcw/default.aspx?cite=69.50.4013",
    "https://app.leg.wa.gov/RCW/default.aspx?cite=9.96.080",
    "https://app.leg.wa.gov/rcw/default.aspx?cite=9.96.060",
    ]
const rcws = []

urls.forEach(url => {
    axios(url)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            $('#contentWrapper a').first().remove()
            const cite = $('#contentWrapper div').first().text()
            const title = $('#contentWrapper div:nth-child(2)').text()
            const content = $('#contentWrapper div:nth-child(3)').text()

            rcws.push({
                cite,
                title,
                content
            })
        }).catch(err => console.log(err))
})

app.get('/results', (req, res) => {
    res.json(rcws)
})



app.listen(PORT, () => console.log(`serving running on PORT ${PORT}`))