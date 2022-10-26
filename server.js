const express = require('express');
// const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 4444;

// const path = require('path');
const apiRoutes = require("./routes/apiRoute");
const indexRoutes = require("./routes/index")

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', indexRoutes)


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(PORT, () => {
    console.log(`server available at localhost:${PORT}`);
})


