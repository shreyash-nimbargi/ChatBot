import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCMciPGZMdCw7lPX2YeygNxZO32REYhXdQ"); // <-- Replace with your API key

const systemInstruction = `You are Praxis AI, an advanced assistant...`; // Add your full instruction here

export async function getPraxisResponse(userInput: string, history: any[] = []) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const chatSession = model.startChat({
    history,
    systemInstruction: {
      role: "model",
      parts: [{ text: systemInstruction }]
    },
    generationConfig: {}
  });

  const result = await chatSession.sendMessage([{ text: userInput }]);
  return result.response.text();
}