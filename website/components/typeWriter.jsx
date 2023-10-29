import { useState, useEffect } from 'react';

export default function Typewriter({ text }) {
    console.log("text", text);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    const interval = setInterval(() => {
      if (i === text.length) {
        isDeleting = true;
      }
      setCurrentText((prevText) => {
        let newText = prevText;
        if (isDeleting) {
          newText = prevText.slice(0, -1);
        } else {
          newText = prevText + text[i];
          console.log("i", i, text[i], newText);
          i++;
          if (i === text.length) isDeleting = true;
        }
        return newText;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [text]);

  return <h1>{currentText}</h1>;
}
