import React from 'react';
import { TextItem } from '../molecules/textItem';
import { ClipboardState } from '../context/clipboardProvider';

const testWords = ["I am", "Check the", "hey you good"];

export const History = () => {
  const { copyHistory }: any = ClipboardState();

  console.log(copyHistory)

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
  }

  return (
    <div>
      {copyHistory.map((text: string, index: number) => (
        <TextItem key={index} text={text} onCopy={() => copy(text)} />
      ))}
    </div>
  )
}
