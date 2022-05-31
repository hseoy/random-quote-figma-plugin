import { useState } from 'react';
import { requestQuotes } from '../api';
import { Quote } from '../types';

function useRandomQuotes() {
  const [quotesData, setQuotesData] = useState<Quote[] | null>(null);

  const getQuotes = async () => {
    if (quotesData) {
      return quotesData;
    }
    const apiQuotes = await requestQuotes();
    setQuotesData(apiQuotes);
    return apiQuotes;
  };

  const getRandomQuote = async () => {
    const quotes = await getQuotes();
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return quote;
  };

  return getRandomQuote;
}

export default useRandomQuotes;
