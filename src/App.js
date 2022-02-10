import React from 'react';
import Slideshow from './components/Slideshow';
import './styles.css';
import styled from 'styled-components';


const App = () => {
  return (
    <main>
      <Title>Featured Products</Title>
      <Slideshow />
    </main>
  )
}

const Title = styled.p`
  font-size: 18px;
  font-wight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export default App

