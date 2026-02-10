import axios from "axios";

export const askAI = async (question) => {
  if (typeof question !== "string" || !question.trim()) {
    throw new Error("Invalid AI input");
  }

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
      model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "user",
            content: `Answer in ONE WORD only: ${question}`
          }
        ],
        temperature: 0
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
        }
      }
    );

    const answer = response.data.choices[0].message.content;

    return answer.trim().split(/\s+/)[0];
  } catch (err) {
    console.error("GROQ ERROR:", err.response?.data || err.message);
    throw err;
  }
};
