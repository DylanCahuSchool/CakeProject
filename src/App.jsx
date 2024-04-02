import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '') {
      alert('Le champ est obligatoire');
    } else {
      alert(`Bonjour ${name}`);
      setName('');
    }
  };

  return (
    <>
      <h1>Bienvenue chez nous</h1>
      <hr/>
      <h1>Connectez vous</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Accéder à votre espace</button>
      </form>
    </>
  );
}

export default App;