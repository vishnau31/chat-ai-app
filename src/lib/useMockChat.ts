import { useState, useCallback } from "react";

export type ChatStatus = "idle" | "searching" | "browsing" | "streaming" | "error" | "complete";

export function getMockReply(): string {
    return `Sentient refers to the ability to experience feelings or sensations. It means being capable of sensing or feeling.
  
  ### Key Points:
  - Sentient beings are able to feel things.
  - The term is often used in phrases like "sentient beings."
  - The word has roots in Latin.
  
  ### Related Concepts:
  - Used in ethics and science fiction.`;
  }

  
export const useMockChat = () => {
  const [status, setStatus] = useState<ChatStatus>("idle");
  const [streamedContent, setStreamedContent] = useState("");

  const sendMessage = useCallback((input: string, onStart: () => void, onDone: () => void) => {
    setStatus("searching");
    setStreamedContent("");

    setTimeout(() => setStatus("browsing"), 1000);

    setTimeout(() => {
      setStatus("streaming");
      const fullText = getMockReply();
      simulateStream(fullText, (chunk) => {
        setStreamedContent((prev) => prev + chunk);
      }, () => {
        setStatus("complete");
        onDone();
      });
    }, 2000);

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return {
    status,
    streamedContent,
    sendMessage,
  };
};

// Simulates real-time token-by-token streaming
function simulateStream(text: string, onChunk: (chunk: string) => void, onDone?: () => void) {
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      onChunk(text[i]);
      i++;
    } else {
      clearInterval(interval);
      onDone?.();
    }
  }, 20);
}
