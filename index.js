const express = require("express");

const app = express();
app.use(express.json());

app.post("/telegram-webhook", (req, res) => {
  console.log("Telegram Update:", JSON.stringify(req.body));
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("Telegram bot is running ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running on port", PORT));
