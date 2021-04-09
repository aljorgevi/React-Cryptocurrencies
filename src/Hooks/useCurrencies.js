import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

export default function useCurrencies() {
  const [state, setState] = useState('');

  const data = [
    { code: 'USD', name: 'USD' },
    { code: 'CLP', name: 'CLP' },
    { code: 'EUR', name: 'EUR' },
    { code: 'GBP', name: 'GBP' },
  ];

  const SelectCurrency = () => (
    <Fragment>
      <Label>Choose you currency</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">-- Choose --</option>
        {data.map((item) => (
          <option key={item.code} value={item.code}>
            {item.name}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [state, SelectCurrency];
}

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;
