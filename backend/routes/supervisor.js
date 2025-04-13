const twilio = require("twilio");
const client = new twilio("ACCOUNT_SID", "AUTH_TOKEN");

app.post("/call-supervisor", (req, res) => {
  const { employeePhone, supervisorPhone } = req.body;

  client.calls
    .create({
      url: "http://demo.twilio.com/docs/voice.xml",
      to: supervisorPhone,
      from: employeePhone,
    })
    .then((call) => res.json({ message: "Call initiated", callSid: call.sid }))
    .catch((err) => res.status(500).json({ error: err.message }));
});
