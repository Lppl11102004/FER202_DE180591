import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <div className="text-center mt-4">
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
