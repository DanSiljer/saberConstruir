const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {

    res.render("index", {
    });
  });

app.get("/detalhes/:id", (req, res) => {
const id = req.params.id;
const pokemon = pokedex[id];
res.render("detalhes", {
    pokemon,
    });
});

app.get("/atividades", (req, res) => {
    res.render("atividades");
});

app.get("/jogos", (req, res) => {
res.render("jogos");
});

  app.post("/new", (req, res) => {
    const pokemon = req.body;
    pokedex.push();
    res.redirect("/");
  
  });