import { useState, useEffect } from 'react';

const WordCount = (name) => {
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);

  useEffect(() => {
    const countWordsAndLetters = () => {
      const words = name.trim().split(' ');
      const filteredWords = words.filter((word) => word !== '');
      setWordCount(filteredWords.length);

      const letters = name.replace(/\s/g, '');
      setLetterCount(letters.length);
    };

    countWordsAndLetters();
  }, [name]);

  return {
    wordCount,
    letterCount,
  };
};

export default WordCount;
