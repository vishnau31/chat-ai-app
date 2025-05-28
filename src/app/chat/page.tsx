'use client';
import { ChatScreenInput } from '@/components/ChatInput';
import { Message } from '@/components/MessageBox';
import { useMockChat } from '@/lib/useMockChat';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface MessagePoint {
  title: string;
  points: string[];
}

interface MessageData {
  description: string;
  points: MessagePoint[];
}

const dummyMessages: MessageData = {
  description:
    'Sentient refers to the ability to experience feelings or sensations. It means being capable of sensing or feeling, conscious of or responsive to the sensations of seeing, hearing, feeling, tasting, or smelling.',
  points: [
    {
      title: 'Key Points:',
      points: [
        'Sentient beings are able to feel things or sense them.',
        "The term is often used in phrases like 'sentient beings' and 'sentient creatures,' emphasizing that things that don't have life don't have feelings.",
        'Sentient is a formal adjective that can be used in different contexts and languages.',
        'The word has its roots in Latin, with the earliest known use dating back to the early 1600s.',
      ],
    },
    {
      title: 'Examples and Usage:',
      points: [
        'Man is a sentient being.',
        'There was no sign of any sentient life or activity.',
        "Sentient is used with nouns like 'being' to describe entities that possess consciousness or the ability to feel.",
      ],
    },
    {
      title: 'Related Concepts:',
      points: [
        'Sentience is an important concept in ethics, particularly in utilitarianism, as it forms a basis for determining which entities deserve moral consideration.',
        "In Asian religions, the word 'sentience' has been used to translate various concepts.",
        "In science fiction, the word 'sentience' is often used to describe the ability of artificial intelligence or other non-human entities to experience consciousness or emotions.",
      ],
    },
  ],
};

export default function ChatPage() {
  const searchParams = useSearchParams();
  const { status, streamedContent, sendMessage } = useMockChat();
  const question = searchParams.get('question');

  useEffect(() => {
    if (question) {
      sendMessage(
        question,
        () => {}, // onStart callback
        () => {}, // onDone callback
      );
    }
  }, [question, sendMessage]);

  return (
    <div className="flex flex-col items-center">
      {/* Top Chat Section */}
      <div className="w-full max-w-5xl rounded-b-2xl border border-gray-200 border-t-0 px-6 py-4 bg-white">
        <p className="text-lg font-medium text-black">{question || 'Chat'}</p>
      </div>
      <div className="w-full max-w-4xl mt-4">
        <Message
          message=""
          isUser={false}
          status={status}
          streamedContent={streamedContent}
          messageData={dummyMessages}
        />
      </div>
      {/* Chat Messages Section */}
      <div className="fixed bottom-0 mb-2 w-full max-w-4xl">
        <ChatScreenInput
          sendMessage={sendMessage}
          processing={status !== 'idle' && status !== 'complete' && status !== 'error'}
        />
      </div>
    </div>
  );
}
