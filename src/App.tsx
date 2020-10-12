import React from 'react';

import GlobalStyle from './styles/global';
import Main from './pages/Main';
import About from './pages/About';


const App: React.FC = () => {

  return (
    <>
      <About />
      {/* <Main /> */}
      <GlobalStyle />
    </>
  );
}

export default App;
