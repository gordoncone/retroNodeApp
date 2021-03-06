const express 		= require("express"),
	  app     		= express(),
	  axios			= require('axios'),
	  bodyParser 	= require("body-parser");

      

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static('public'));
app.use(express.static('files'));
app.use('/', express.static('public/js'));

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
	res.render("index");
});

app.get("/history", (req, res) => {
	res.render("history");
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  //testing 123

  