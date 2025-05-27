'use client';
import { ChatScreenInput } from '@/components/ChatInput';
import { useState } from 'react';
import { Message } from '@/components/MessageBox';
import { useMockChat } from '@/lib/useMockChat';
import { send } from 'process';

const markdown = `
Sentient refers to the ability to experience feelings or sensations.  
It means being capable of [sensing or feeling](#), conscious of or responsive to sensations of seeing, hearing, feeling, tasting, or smelling.

---

### **Key Points:**

- Sentient beings are able to feel things or sense them.  
- The term is used in phrases like “sentient beings” and “sentient creatures,” emphasizing those that don’t have life don’t have feelings.  
- It is a formal adjective used in different contexts and languages.  
- The word has roots in Latin, dating back to the early 1600s.

---

### **Examples and Usage:**

- Man is a sentient being.  
- There was no sign of any sentient life or activity.  
- Sentient is used in phrases like “being” to describe consciousness or the ability to feel.

---

### **Related Concepts:**

- Sentience in ethics determines moral consideration.  
- In Asian religions, “sentience” is used in many contexts.  
- In sci-fi, it describes AI’s ability to feel or think.
`;

type Chat = {
  id: string;
  title: string;
  messages: Array<{
    id: string;
    content: string;
    role: 'user' | 'assistant';
    createdAt: string;
  }>;
  createdAt: string;
  updatedAt: string;
};

export default function ChatPage() {
  const [chat, setChat] = useState<Chat>({
    id: '1',
    title: 'Sample Chat',
    messages: [
      {
        id: '1',
        content: 'Hello, how can I help you?',
        role: 'assistant',
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        content: 'What is the meaning of life?',
        role: 'user',
        createdAt: new Date().toISOString(),
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const { status, streamedContent, sendMessage } = useMockChat();

  return (
    <div className="flex flex-col items-center">
      {/* Top Chat Section */}
      <div className="w-full max-w-5xl rounded-b-2xl border border-gray-200 border-t-0 px-6 py-4 bg-white">
        <p className="text-lg font-medium text-black">What is Sentient?</p>
      </div>
      <div className="w-full max-w-4xl mt-4">
        <Message
          message={markdown}
          isUser={false}
          status={status}
          streamedContent={streamedContent}
        />
      </div>
      {/* Chat Messages Section */}
      <div className="absolute bottom-0 mb-2 w-full max-w-4xl">
        <ChatScreenInput sendMessage={sendMessage} />
      </div>
    </div>
  );
}
