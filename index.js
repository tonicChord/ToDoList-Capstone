import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let dailyTasks = [];

let workTasks = [];

app.get("/", (req, res) => {
    let currentUrl = req.url;
    console.log(`get req ${currentUrl}`);
    res.render("index.ejs", { currentUrl, dailyTasks });
});

app.get("/work", (req, res) => {
    let currentUrl = req.url;
    console.log(`get req ${currentUrl}`);
    res.render("index.ejs", { currentUrl, workTasks });
});

app.post('/', (req,res) => {
    const newTask = {
        name:req.body.task,
        done:false
    };
    dailyTasks.push(newTask);
    res.redirect('/');
});

app.post('/work', (req,res) => {
    const newTask = {
        name:req.body.task,
        done:false
    };
    workTasks.push(newTask);
    res.redirect('/work');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});