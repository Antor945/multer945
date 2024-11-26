
const express = require('express')
const profileControler = require('./controller/profileControler')
const upload = require('./middleware/multerMiddleware')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(` port is runing ${port}`)
})

app.post("/api/v1/profile", upload.single('avatar'),profileControler)