import express from "express"

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/home", (req, res) => {
    res.render("index.ejs")
})

app.listen(port, 3001, () => {
    console.log(`Server live on port: ${port}`)
})