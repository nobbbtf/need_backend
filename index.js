const express = require("express");
const app = express();

const PORT = 5080
;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get("/", (req, res) => {
    res.send("Santosh is here")
});
console.log("Hello world")  