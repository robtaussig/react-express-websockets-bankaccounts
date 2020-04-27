const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const port = 8080;
const data = {};

app.use(cors());
app.use(morgan("combined"));

app.get("/account/:account_id/balance", (req, res) => {
  const { account_id } = req.params;
  const balance = data[account_id] || 0;
  return res.status(200).json({ balance });
});

app.post("/account/:account_id/deposit/:deposit", (req, res) => {
  const { account_id, deposit } = req.params;
  const balance = data[account_id] || 0;
  const newBalance = balance + parseInt(deposit);
  data[account_id] = newBalance;
  return res.status(200).json({ balance: newBalance });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
