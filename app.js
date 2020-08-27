const express = require("express")
const app = express()
const port = 3000
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get("/", (req, res) => {
  res.render("index")
  res.set("this is garbage_talk")
})

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})
