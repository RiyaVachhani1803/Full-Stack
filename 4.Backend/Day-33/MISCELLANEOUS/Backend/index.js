const  express = require('express');
const app = express();
const PORT = 8080;

app.get('/register', (req, res) => {
    let {user, password} = req.query;
    res.send(`standard GET response. Welcome ${user}`);
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/register', (req, res) => {
    let {user, password} = req.body;
    res.send(`standard POST response. Welcome ${user}`);
});

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});
