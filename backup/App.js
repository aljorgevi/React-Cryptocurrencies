import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import image from './assets/img/cryptomonedas.png';
import Form from './Components/Form';
import Price from './Components/Price';
import Spinner from './Components/Spinner';
import axios from 'axios';

function App() {
  const [currency, setCurrency] = useState('');
  const [cryptocurrency, setCryptocurrency] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const requestAPI = async () => {
      if (currency === '') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

      const response = await axios.get(url);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);

        setResult(response.data.DISPLAY[cryptocurrency][currency]);
      }2000);
    };
    requestAPI();
  }, [currency, cryptocurrency]);

  const component = loading ? <Spinner /> : <Price result={result} />;

  return (
    <Container>
      <div>
        <Image src={image} alt="image-cripto" />
      </div>
      <div>
        <Heading>Check Live Cryptocurrency prices</Heading>
        <Form
          setLoading={setLoading}
          setCurrency={setCurrency}
          setCryptocurrency={setCryptocurrency}
        />
        {component}
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 90px;
  &::after {
    content: '';
    width: 200px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
