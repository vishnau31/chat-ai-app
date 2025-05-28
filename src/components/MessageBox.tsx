import { ChatStatus, useMockChat } from '@/lib/useMockChat';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useState } from 'react';

interface MessagePoint {
  title: string;
  points: string[];
}

interface Message {
  description: string;
  points: MessagePoint[];
}

const dummyMessages: Message = {
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

export const renderMessage = () => {
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);

  const handleCopy = async () => {
    const content = `${dummyMessages.description}\n\n${dummyMessages.points
      .map((section) => `${section.title}\n${section.points.join('\n')}`)
      .join('\n\n')}`;

    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFeedback = (type: 'up' | 'down') => {
    setFeedback(type);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 font-jakarta">
      <div className="space-y-6">
        <p className="text-black text-base">{dummyMessages.description}</p>
        {dummyMessages.points.map((section, index) => (
          <div key={index} className="space-y-4">
            {section.title && <h6 className="text-sm font-bold text-black">{section.title}</h6>}
            <ul className="list-disc pl-6 space-y-2 marker:text-black">
              {section.points.map((point, pointIndex) => (
                <li key={pointIndex} className="text-black text-sm">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
          title={copied ? 'Copied!' : 'Copy to clipboard'}
        >
          <Copy className="h-4 w-4" />
          <span className="text-sm">Copy</span>
        </button>
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleFeedback('up')}
            className={`flex items-center gap-1 ${
              feedback === 'up' ? 'text-green-500' : 'text-gray-500 hover:text-gray-700'
            }`}
            title="Helpful"
          >
            <ThumbsUp className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleFeedback('down')}
            className={`flex items-center gap-1 ${
              feedback === 'down' ? 'text-red-500' : 'text-gray-500 hover:text-gray-700'
            }`}
            title="Not helpful"
          >
            <ThumbsDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const Message = ({
  message,
  isUser,
  status,
  streamedContent,
}: {
  message: string;
  isUser: boolean;
  streamedContent: string;
  status: ChatStatus;
}) => {
  return (
    <div className="flex">
      {status === 'idle' ? null : (
        <div className="flex flex-row">
          <div className="mr-2">
            <Image src="/logo.svg" alt="Logo" width={25} height={25} />
          </div>
          {status === 'searching' ? (
            <div className="prose prose-sm text-muted-foreground max-w-none">
              <p className="animate-pulse text-black-500">Searching for relevant information...</p>
            </div>
          ) : status === 'streaming' || status === 'complete' ? (
            <div className="prose prose-sm text-muted-foreground max-w-none text-black-500">
              {renderMessage()}
            </div>
          ) : (
            <div className="prose prose-sm text-muted-foreground max-w-none">
              <p className="animate-pulse text-black-500">Browsing the web for answers...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
