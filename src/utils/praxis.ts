import { GoogleGenerativeAI } from "@google/generative-ai";

// For Create React App, environment variables must start with REACT_APP_ and are available via import.meta.env in Vite or process.env in CRA.
// If using Vite:
const apiKey = import.meta.env.VITE_GENAI_API_KEY as string;


const genAI = new GoogleGenerativeAI(apiKey);

const systemInstruction = `You are Praxis AI, an advanced assistant...`; // Add your full instruction here

export async function getPraxisResponse(userInput: string, history: any[] = []) {
  try {
    if (!apiKey) {
      throw new Error('API key is not configured');
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chatSession = model.startChat({
      history,
      generationConfig: {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      }
    });

    const result = await chatSession.sendMessage([{ text: userInput }]);
    return result.response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
}