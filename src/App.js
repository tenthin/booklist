import BookContextProvider from './contexts/BookContext';
import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
      </BookContextProvider>
    </div>
  );
}

export default App;
