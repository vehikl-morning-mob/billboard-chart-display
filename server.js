const express = require('express')
const app = express()
const port = 3001
const { getChart } = require('billboard-top-100');
var cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

app.get('/', (req, res) => {
    getChart(req.query.name, req.query.date, (err, chart) => {
        if (err) res.err(err);
        console.log(chart.week) // prints the week of the chart in the date format YYYY-MM-DD
        console.log(chart.previousWeek.url) // prints the URL of the previous week's chart
        console.log(chart.previousWeek.date) // prints the date of the previous week's chart in the date format YYYY-MM-DD
        console.log(chart.nextWeek.url) // prints the URL of the next week's chart
        console.log(chart.nextWeek.date) // prints the date of the next week's chart in the date format YYYY-MM-DD
        console.log(chart.songs); // prints array of top 100 songs for week of August 27, 2016
        console.log(chart.songs[3]); // prints song with rank: 4 for week of August 27, 2016
        console.log(chart.songs[0].title); // prints title of top song for week of August 27, 2016
        console.log(chart.songs[0].artist); // prints artist of top songs for week of August 27, 2016
        console.log(chart.songs[0].rank) // prints rank of top song (1) for week of August 27, 2016
        console.log(chart.songs[0].cover) // prints URL for Billboard cover image of top song for week of August 27, 2016
        res.send(chart);
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
