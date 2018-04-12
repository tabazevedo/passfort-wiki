import React from 'react';
import { styled } from 'styletron-react';

const Main = styled('main', {
  fontFamily: 'sans-serif',
  padding: '30px'
});

const Heading = styled('h1', {
  fontSize: '2em',
  fontWeight: 'bold',
  paddingLeft: '20px'
});

const Content = styled('div', {
  backgroundColor: '#F5F5F5',
  border: '1px dashed #E0E0E0',
  padding: '20px'
});

function App({ children }) {
  return (
    <Main>
      <Heading>PassFort Wiki</Heading>
      <Content>
        {children}
      </Content>
    </Main>
  );
}

export default App;
