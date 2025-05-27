'use client';
import { HomeScreenInput } from '@/components/ChatInput';
import { MessageRenderer } from '@/components/MessageBox';
import useWindowSize from '@/lib/useWindowSize';
import Logo from '../../public/logo.svg'; // Adjust the path as necessary
import Suggestions from '@/components/Suggestions';
import { Sidebar } from '@/components/ui/sidebar';

const figma_width = 3024;
const figma_height = 1964;
const HomePage = () => {
  const [windowWidth, windowHeight] = useWindowSize(); // Placeholder for useWindowSize hook

  const scale = {
    width: Math.floor(windowWidth / figma_width),
    height: Math.floor(windowHeight / figma_height),
  };

  return (
    <div className={'min-h-screen flex flex-col items-center justify-center p-4'}>
      <Sidebar />
      <div>
        <div className="flex items-center justify-center mb-8">
          <Logo />
        </div>
        <HomeScreenInput />
        <Suggestions />
      </div>
    </div>
  );
};

export default HomePage;
