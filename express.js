const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors("*"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let memory = [{
	_id : "1",
	name : "gigi",
	age: 33,
	sexe: true
}];

app.get("/", (req, res) => {

})
app.get("/:id", (req, res) => {
	let id = req.params.id
	result = memory.filter((e) => e._id === id)
	res.setHeader("Content-Type", "application/json")
	res.end(JSON.stringify(result[0]))
})


app.post("/", (req, res) => {
    console.log(req.query)
    res.send("post")
})
app.put("/", (req, res) => {
  res.send("put")
})
app.delete("/", (req, res) => {
  res.send("delete");
})

app.listen(3000, () => {
  console.log("Le serveur tourne, sur le port 3000");
})