import { useState } from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Description } from './components/Description';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='varen-container'>
      <Home {...{ isOpen, setIsOpen }} />
      {!isOpen && (
        <>
          <Description />
          <About />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
