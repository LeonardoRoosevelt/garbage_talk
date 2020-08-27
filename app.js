const express = require("express")
const app = express()
const port = 3000
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const garbageTalk = require("./garbage_talk")

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting static files==>會先去看public資料夾
app.use(express.static("public"))

// setting routes
app.get("/", (req, res) => {
  res.render("index")
  res.set("this is garbage_talk")
})

app.post("/", (req, res) => {
  const options = req.body
  const sentence = garbageTalk(req.body)
  res.render("index", { sentence: sentence, options: options })
})

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})
