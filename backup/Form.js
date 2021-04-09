import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import useCurrencies from '../Hooks/useCurrencies';
import useCryptocurrencies from '../Hooks/useCryptocurrencies';
import Error from './Error';
import axios from 'axios';

const Form = ({ setCryptocurrency, setCurrency, setLoading }) => {
  const [cryptocurrencyList, setCryptocurrencyList] = useState([]);
  const [error, setError] = useState(false);

  // Custom Hook useCurrencies
  const [currency, SelectCurrency] = useCurrencies();

  // Custon Hook useCryptocurrencies
  const [cryptocurrency, SelectCryptocurrency] = useCryptocurrencies(
    cryptocurrencyList
  );

  useEffect(() => {
    const url =
      'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    const requestAPI = async () => {
      const result = await axios.get(url);
      setCryptocurrencyList(result.data.Data);
    };
    requestAPI();
  }, []);

  const handleonSubmit = (e) => {
    e.preventDefault();

    if (currency === '' || cryptocurrency === '') {
      setError(true);
      return;
    }

    setError(false);

    setLoading(true);
    setCurrency(currency);
    setCryptocurrency(cryptocurrency);
  };

  return (
    <form onSubmit={handleonSubmit}>
      {error ? <Error message="You most fill in all of the fields" /> : null}
      <SelectCurrency />
      <SelectCryptocurrency />
      <Button type="submit" value="Submit" />
    </form>
  );
};

export default Form;

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;
