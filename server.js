import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load .env

const app = express();
app.use(cors());
app.use(express.json());

console.log("DEBUG: OpenAI Key:", process.env.OPENAI_API_KEY ? "FOUND" : "MISSING");

app.post("/chat", async (req, res) => {
    const { messages } = req.body;
    console.log("DEBUG: Received messages:", messages);

    if (!process.env.OPENAI_API_KEY) {
        return res.status(500).json({ error: "API key is missing!" });
    }

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
                }
            }
        );

        res.json(response.data);
    } catch (err) {
        console.error("ERROR:", err.response?.data || err.message);
        res.status(500).json({ error: err.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
