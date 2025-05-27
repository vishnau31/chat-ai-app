import { ChatStatus, useMockChat } from '@/lib/useMockChat';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

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
              <p>Searching for relevant information...</p>
            </div>
          ) : status === 'streaming' ? (
            <div className="prose prose-sm text-muted-foreground max-w-none">
              <ReactMarkdown>{message}</ReactMarkdown>
            </div>
          ) : (
            <div className="prose prose-sm text-muted-foreground max-w-none">
              <p>Browsing the web for answers...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
