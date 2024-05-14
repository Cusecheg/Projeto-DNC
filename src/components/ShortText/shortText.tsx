interface ShortenTextProps {
    text: string;
  }
  
  const ShortenText = ({ text }: ShortenTextProps) => {
    // Divide el texto en palabras
    const words = text.split(' ');
    const shortenedWords = words.slice(0, 20);
    const shortenedText = shortenedWords.join(' ');
    return words.length > 3 ? shortenedText + '...' : shortenedText;
  };
  
  export default ShortenText;