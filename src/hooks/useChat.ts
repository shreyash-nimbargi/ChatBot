import { useState, useCallback } from 'react';
import { Message } from '../types/chat';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback((text: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(text),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setIsTyping(false);
  }, []);

  return {
    messages,
    isTyping,
    sendMessage,
    clearMessages,
  };
};

// Simple bot response generator
const getBotResponse = (userMessage: string): string => {
  const responses = [
    "That's an interesting question! Let me think about that for a moment.",
    "I understand what you're asking. Here's my perspective on that:",
    "Thanks for sharing that with me. I'd be happy to help you with this.",
    "That's a great point. Let me provide some insights on this topic.",
    "I appreciate you asking about this. Here's what I think:",
    "That's something I can definitely help you with. Let me explain:",
    "I see what you're getting at. This is actually quite fascinating:",
    "Good question! This is something that comes up often, and here's my take:",
  ];

  const followUps = [
    "What would you like to know more about?",
    "Is there anything specific you'd like me to elaborate on?",
    "Feel free to ask me anything else!",
    "What other questions do you have about this?",
    "I'm here to help with any other questions you might have.",
    "Would you like me to explain anything else?",
    "Is there another aspect of this you'd like to explore?",
    "Let me know if you need clarification on anything!",
  ];

  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  const randomFollowUp = followUps[Math.floor(Math.random() * followUps.length)];

  return `${randomResponse}\n\n${randomFollowUp}`;
};