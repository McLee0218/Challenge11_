const express = require('express').Router();
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 4444;

// const path = require('path');


app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);
// app.use("/api", apiRoutes);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(PORT, () => {
    console.log(`server available at localhost:${PORT}`);
})


