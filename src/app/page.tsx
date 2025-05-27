'use client';
import { HomeScreenInput } from '@/components/ChatInput';
import useWindowSize from '@/lib/useWindowSize';
import Logo from '../../public/logo.svg';
import Suggestions from '@/components/Suggestions';
import { Sidebar } from '@/components/ui/sidebar';
import { useState, useRef } from 'react';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSuggestionSelect = (suggestion: string) => {
    setInputValue(suggestion);
    // Automatically submit the form after setting the input value
    setTimeout(() => {
      formRef.current?.requestSubmit();
    }, 0);
  };

  return (
    <div className={'min-h-screen flex flex-col items-center justify-center p-4'}>
      <Sidebar />
      <div>
        <div className="flex items-center justify-center mb-8">
          <Logo />
        </div>
        <HomeScreenInput value={inputValue} onChange={setInputValue} formRef={formRef} />
        <Suggestions onSelect={handleSuggestionSelect} />
      </div>
    </div>
  );
};

export default HomePage;
