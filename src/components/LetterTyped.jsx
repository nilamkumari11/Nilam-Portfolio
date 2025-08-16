import React, { useEffect, useState } from 'react';

const LetterTyped = ({ strings, charDelay = 100, pause = 1500, loop = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [stringIndex, setStringIndex] = useState(0);

  useEffect(() => {
    const currentString = strings[stringIndex];

    if (charIndex < currentString.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentString.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, charDelay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        if (loop) {
          setCharIndex(0);
          setStringIndex((stringIndex + 1) % strings.length);
        }
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, stringIndex, strings, charDelay, pause, loop]);

  return <span>{displayedText}<span className="blinking-cursor">|</span></span>;
};

export default LetterTyped;
