const express = require("express");
const app = express();  
console.dir(app);

let port = 8080; 

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
}); 

// app.use((req, res) => {
//   console.log("Request received"); 
//   res.send("This is a basic response");
// });

app.get("/", (req, res) => {
    res.send("you connected to root path");
});

// app.get("/about", (req, res) => {
//     res.send("you connected to about path");
// });

// app.get("/contact", (req, res) => {
//     res.send("you connected to contact path");
// });

// app.get("/help", (req, res) => {
//     res.send("you connected to help path");
// });

// app.get("*", (req, res) => {
//     res.send("This path does not exist");
// });

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username} with id ${id}!</h1>`;
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.send("<h1>Nothing Searched</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});