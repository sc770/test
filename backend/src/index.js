const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Backend is running correctly!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
