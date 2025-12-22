# ChatBot 🤖

A React-based chatbot powered by Google Gemini AI (via `@google/generative-ai`).  
Supports conversation with AI using a secure API key stored in environment variables.

## Features 🚀

- Chat interface with AI responses
- API key is kept secret using a `.env` file
- Modular code structure (utility functions in `src/utils/`)
- Easy to extend and customize

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the project root by copying the example file:

```bash
cp .env.example .env
```

Then edit the `.env` file and add your actual Google Generative AI API key:

```
VITE_GENAI_API_KEY=your_actual_api_key_here
```

You can get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey).

**Security Notes:**  
- Never commit your `.env` file. It is already included in `.gitignore`.
- If you accidentally commit an API key, revoke it immediately from Google Cloud Console and generate a new one.

### 4. Start the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

```
src/
  components/         # React components
  utils/
    praxis.ts         # Gemini AI utility logic
  App.tsx             # Main app component
  ...
.env                  # Environment variables (not committed, create from .env.example)
.env.example          # Template for environment variables
```

## Usage

- Enter your message in the chat input and receive AI-generated responses.
- The AI logic is in `src/utils/praxis.ts`.

## Dependencies

- [React](https://reactjs.org/)
- [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai)

## Security

- **API keys are never committed**. Always use the `.env` file for secrets.

## License

MIT
