import React from 'react';
import ChatHeader from './components/ChatHeader';
import ChatContainer from './components/ChatContainer';
import ChatInput from './components/ChatInput';
import { useChat } from './hooks/useChat';

function App() {
  const { messages, isTyping, sendMessage } = useChat();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        <div className="flex-1 bg-white shadow-xl rounded-t-none sm:rounded-t-2xl sm:mt-4 overflow-hidden flex flex-col">
          <ChatHeader />
          <ChatContainer messages={messages} isTyping={isTyping} />
          <ChatInput onSendMessage={sendMessage} disabled={isTyping} />
        </div>
      </div>
    </div>
  );
}

export default App;