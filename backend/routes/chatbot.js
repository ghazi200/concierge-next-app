const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: "YOUR_OPENAI_API_KEY" });

app.post("/chatbot", async (req, res) => {
  const { message } = req.body;
  const response = await openai.Completion.create({
    model: "gpt-4",
    prompt: `Handle employee scheduling: ${message}`,
    max_tokens: 100,
  });
  res.json({ reply: response.choices[0].text });
});
