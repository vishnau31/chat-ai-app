'use client';
import { HomeScreenInput } from '@/components/ChatInput';
import Logo from '../../public/logo.svg';
import Suggestions from '@/components/Suggestions';
import { Sidebar } from '@/components/ui/sidebar';
import { useState, useRef } from 'react';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSuggestionSelect = (suggestion: string) => {
    setInputValue(suggestion);
  };

  return (
    <div className={'min-h-screen flex flex-col items-center justify-center p-4'}>
      <Sidebar />
      <div>
        <div className="flex items-center justify-center mb-8">
          <Logo />
        </div>
        <HomeScreenInput value={inputValue} onChange={setInputValue} />
        <Suggestions onSelect={handleSuggestionSelect} />
      </div>
    </div>
  );
};

export default HomePage;
