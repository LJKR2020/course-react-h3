import React from 'react';
import './App.css';

function App() {
  return (
      <>
          <form>
              <h3>Gegevens</h3>
              <label htmlFor='firstName'> Naam:
                  <input
                      type='text'
                      id='firstName'
                      name='name'
                  />
              </label>
              <label htmlFor='age'> Leeftijd:
                  <input
                      type='number'
                      id='age'
                      name='age'
                  />
              </label>
              <h3>Jouw review</h3>
              <label htmlFor='message'>
                  Opmerkingen:
                  <input
                      type='text'
                      id='message'
                      name='message'
                  />
              </label>
              <label htmlFor='newsletter'>
                  <input
                      type='checkbox'
                      id='newsletter'
                      name='newsletter'
                  />
                  Ik schrijf me in voor de nieuwsbrief
              </label>
              <label htmlFor="sendButton">
                  <button type='button'>
                      Versturen
                  </button>
              </label>
          </form>
      </>
  );
}

export default App;
