import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import './css/style.css';
import { useExempleState } from '../../hook/useStateExemple';
import { MainContent } from '../MainContent';

function App() {
  const { exemple } = useExempleState();

  console.log(exemple + "  nothing");

  return (
    <>
      <Header />
      <div className="App">
        <MainContent />
      </div>
      <Footer />
    </>
  );
}

export default App;
