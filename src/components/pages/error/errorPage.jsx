import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function ErrorPage() {
    return (
      <div>
        <h1>Erreur: Page non trouvée</h1>
        <button onClick={() => window.location.href = '/'}>Retourner vers la page d'accueil</button>
      </div>
    );
  }