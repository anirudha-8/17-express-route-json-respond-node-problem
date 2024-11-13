const express = require("express");

const app = express();

app.get("/users", (req, res) => {
	res.json([{ name: "kaushal" }, { name: "shreyas" }, { name: "anirudha" }]);
});

const port = 8080;

app.listen(port, () => {
	console.log(`App is running at: http://localhost:${port}/users`);
});
