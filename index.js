const PORT = 3000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = "https://apps.leg.wa.gov/rcw/default.aspx?cite=69.50.4013"
axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const rcw = $('#contentWrapper').text()
        console.log(rcw)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`serving running on PORT ${PORT}`))