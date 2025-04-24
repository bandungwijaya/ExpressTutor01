const express = require('express')
const app = express()
const port = 3000

//import body parser
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//import route tags
const tagsRouter = require('./routes/tags');
app.use('/api/tags', tagsRouter); // use route tags di Express

app.get('/', (req, res) => {
  res.send('Hello Gaes!')
})

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
})