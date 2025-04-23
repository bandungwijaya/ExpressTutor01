const express = require('express')
const app = express()
const port = 3000

//import route tags
const tagsRouter = require('./routes/tags');
app.use('/api/tags', tagsRouter); // use route tags di Express

app.get('/', (req, res) => {
  res.send('Hello Gaes!')
})

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
})