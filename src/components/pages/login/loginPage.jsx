import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Page de connexion
function LoginPage() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Entrez votre prénom..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Se connecter</button>
    </form>
  );}