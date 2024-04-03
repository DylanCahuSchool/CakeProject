import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function OrderPage() {
    const name = localStorage.getItem('name');
  
    const handleLogout = () => {
      localStorage.removeItem('name');
    };
  
    return (
      <div>
        <h1>Bonjour {name}</h1>
        <button onClick={handleLogout}>Déconnexion</button>
      </div>
    );
  }
  