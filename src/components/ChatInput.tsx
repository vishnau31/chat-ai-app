'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlusCircle } from 'lucide-react';
import { Textarea } from './ui/textarea';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Input } from './ui/input';

export function SegmentedToggle() {
  const [value, setValue] = useState('mini');

  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(val) => val && setValue(val)}
      className="bg-muted rounded-full p-1 mr-1"
    >
      <ToggleGroupItem
        value="mini"
        className="px-2 text-xs rounded-full transition-all data-[state=on]:bg-white data-[state=on]:text-foreground data-[state=on]:shadow-sm text-muted-foreground"
      >
        4s - mini
      </ToggleGroupItem>
      <ToggleGroupItem
        value="preview"
        className="px-2 text-xs rounded-full transition-all data-[state=on]:bg-white data-[state=on]:text-foreground data-[state=on]:shadow-sm text-muted-foreground"
      >
        s1 - preview
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export const HomeScreenInput = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="w-full max-w-3xl border border-gray-100 shadow rounded-2xl px-3 py-2 flex items-center gap-2 bg-white">
      {/* Attach button */}
      <div className="flex flex-col w-full ">
        <Textarea
          rows={2}
          className="w-full outline-none border-0 shadow-none focus:outline-none focus:ring-0 focus:border-0 focus:shadow-none resize-none"
          placeholder="Ask me anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex flex-row justify-between mt-2">
          <div className="flex flex-row">
            <Button variant="ghost" className="text-gray-500 align-middle mt-1">
              <PlusCircle />
              Attach
            </Button>
            <SegmentedToggle value={'mini'} onChange={(val: any) => setMessage(val)} />
          </div>
          <Button variant="ghost" size="icon" className="ml-2 border rounded-full">
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ChatScreenInput = ({ sendMessage }: { sendMessage: Function }) => {
  const [message, setMessage] = useState('');

  return (
    <div className="flex items-center justify-between w-full max-w-3xl px-4 py-2 rounded-full border border-gray-200 shadow-inner bg-white">
      <div className="flex items-center space-x-2 text-gray-500 flex-1">
        <div className=" flex justify-center items-center">
          <Button variant="ghost" className="w-5 h-5 text-gray-500">
            <PlusCircle />
          </Button>
        </div>
        <input
          type="text"
          placeholder="Ask a follow up..."
          className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <SegmentedToggle />

      <Button
        variant="ghost"
        size="icon"
        className="ml-2 border rounded-full"
        onClick={() => {
          if (message.trim()) {
            sendMessage(message);
            setMessage('');
          }
        }}
      >
        <ArrowRight />
      </Button>
    </div>
  );
};
