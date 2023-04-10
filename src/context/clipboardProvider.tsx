import React, { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";

type Props = {
  children: ReactNode;
}

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
    const copiedTextHisotry = window.localStorage.getItem('copiedTextHistory');
    console.log(copiedTextHisotry)
  }, [copiedText])

  const handleCopy = () => {
    navigator.clipboard
      .readText()
      .then((clipText) => {
        window.localStorage.setItem('copiedTextHistory', JSON.stringify(copyHistory))
        setCopyHistory((allCopiedtext) => [...allCopiedtext, clipText])
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