import React, { useState } from 'react';
import styled from 'styled-components';
import useRandomQuotes from './hooks/useRandomQuotes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 100px;
  font-size: 25px;
  padding: 10px 30px;
  transition: 0.15s;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #191919;
  }
`;

const Text = styled.p`
  font-size: 20px;
`;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const getRandomQuote = useRandomQuotes();

  const generateRandomQuote = async () => {
    setIsLoading(true);
    const randomQuote = await getRandomQuote();
    console.log(randomQuote);
    setIsLoading(false);
  };

  return (
    <Container>
      <Text>Select Text Node and Click</Text>
      <Button onClick={generateRandomQuote}>
        {isLoading ? 'Loading...' : 'Random Quote'}
      </Button>
    </Container>
  );
}

export default App;
