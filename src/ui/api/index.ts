import { Quote } from '../types';

const apiUrl = 'https://type.fit/api/quotes';

export async function requestQuotes() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data as Quote[];
}
