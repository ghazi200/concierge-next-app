const admin = require("firebase-admin");
admin.initializeApp();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().getUserByEmail(email);
    res.json({ userId: user.uid });
  } catch (error) {
    res.status(400).json({ error: "Authentication failed" });
  }
});
