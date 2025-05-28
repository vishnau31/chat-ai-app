'use client';
import { ChatScreenInput } from '@/components/ChatInput';
import { Message } from '@/components/MessageBox';
import { useMockChat } from '@/lib/useMockChat';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Suspense } from 'react';

// Client Component that uses useSearchParams
function ChatContent() {
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
    <>
      {/* Top Chat Section */}
      <div className="w-full max-w-5xl rounded-b-2xl border border-gray-200 border-t-0 px-6 py-4 bg-white">
        <p className="text-lg font-medium text-black">{question || 'Chat'}</p>
      </div>
      <div className="w-full max-w-4xl mt-4">
        <Message message="" isUser={false} status={status} streamedContent={streamedContent} />
      </div>
      {/* Chat Messages Section */}
      <div className="fixed bottom-0 mb-2 w-full max-w-4xl">
        <ChatScreenInput
          sendMessage={sendMessage}
          processing={status !== 'idle' && status !== 'complete' && status !== 'error'}
        />
      </div>
    </>
  );
}

export default function ChatPage() {
  return (
    <div className="flex flex-col items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <ChatContent />
      </Suspense>
    </div>
  );
}
