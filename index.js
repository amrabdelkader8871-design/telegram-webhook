app.post("/telegram-webhook", (req, res) => {
  console.log("Telegram Update:", JSON.stringify(req.body));
  res.sendStatus(200);
});
