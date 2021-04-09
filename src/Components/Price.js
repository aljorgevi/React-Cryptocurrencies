import React from 'react';
import styled from '@emotion/styled';

const Price = ({ result }) => {
  if (Object.keys(result).length === 0) return null;
  return (
    <Div>
      <Quote>
        Price: <span>{result.PRICE}</span>{' '}
      </Quote>
      <Info>
        Highday Price: <span>{result.HIGHDAY}</span>
      </Info>
      <Info>
        Lowday Price: <span>{result.LOWDAY}</span>{' '}
      </Info>
      <Info>
        Price change last 24 hours: <span>{result.CHANGEPCT24HOUR}</span>{' '}
      </Info>
      <Info>
        Last update: <span>{result.LASTUPDATE}</span>{' '}
      </Info>
    </Div>
  );
};

export default Price;

const Div = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: -70px;
  margin-bottom: 40px;
}
`;

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

const Quote = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;
