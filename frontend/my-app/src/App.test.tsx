import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Asigură-te că înconjori <App /> cu un Router pentru a funcționa <Routes>
import App from './App';

test('renders homepage', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Adaugă aserțiuni pentru a verifica dacă pagina se randează corect
  
});
