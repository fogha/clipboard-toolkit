import React from 'react';
import { TextItem } from '../molecules/textItem';

const testWords = ["I am", "Check the", "hey you good"];

export const History = () => {

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
  }

  return (
    <div>
      {testWords.map((text) => (
        <TextItem text={text} onCopy={() => copy(text)} />
      ))}
    </div>
  )
}
