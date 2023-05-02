import React, { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";

type Props = {
  children: ReactNode;
}

// const initialState = {
//   tok: ""
// };

// let reducer = (info, newInfo) => {
//   if (newInfo === null) {
//     localStorage.removeItem("info");
//     return initialState;
//   }
//   return { ...info, ...newInfo };
// };

// const localState = JSON.parse(localStorage.getItem("info"));

const ClipboardContext = createContext({});

export const ClipboardProvider = ({ children }: Props) => {
  const [copyHistory, setCopyHistory] = useState<string[]>([]);
  const [copiedText, setCopiedText] = useState("");
  useEffect(() => {
    window.addEventListener('copy', () => handleCopy());
    return () => {
      window.removeEventListener('copy', () => { });
    };
  });

  useEffect(() => {
    if (localStorage.getItem('copiedTextHistory')) {
      const copiedTextHistory: any = JSON.parse(localStorage.getItem('copiedTextHistory') || '');
      console.log(copiedTextHistory)
      setCopyHistory(copiedTextHistory)
      console.log(copiedTextHistory)
    }

  }, [copiedText])

  const handleCopy = () => {
    navigator.clipboard
      .readText()
      .then((clipText) => {
        localStorage.setItem('copiedTextHistory', JSON.stringify(copyHistory))
        setCopyHistory((allCopiedtext: any) => [...allCopiedtext, clipText])
        setCopiedText(clipText)
      });
  }

  const memoizedValue = useMemo(() => ({
    copyHistory,
    setCopyHistory,
    copiedText,
    setCopiedText
  }), [
    copyHistory,
    setCopyHistory,
    copiedText,
    setCopiedText
  ]);

  return (
    <ClipboardContext.Provider value={memoizedValue}>
      {children}
    </ClipboardContext.Provider>
  );
};

export const ClipboardState = () => {
  return useContext(ClipboardContext);
};