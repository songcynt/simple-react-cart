// Entry point script

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { getData, getCategories } = require("./data");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

const handleError = (res, msg, err, code) => {
    console.error(`Error: ${msg}`);
    res.status(code || 500).json({"error": err});
}

// Serves react app
app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/api/category", function(req, res) {
    res.status(200).json(getCategories());
});

app.get("/api/category/:name", function(req, res){
    const categoryName = req.params.name;
    const data = getData(categoryName);
    if (data !== null){
        res.status(200).json(data);
    } else {
        handleError(res, "Incorrect Category Name", "Incorrect category name", undefined);
    }
});

// ensures express does not interfere with client side routing
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// Jest will set NODE_ENV to 'test', it will be undefined otherwise
if (process.env.NODE_ENV !== 'test'){
    app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
}

module.exports = app;