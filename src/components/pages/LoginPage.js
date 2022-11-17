import React, { useState } from 'react';

export const LoginPage = () => {
  // state(etats,données)
  const [inputValue, setInputValue] = useState('Bob');

  //comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue('');
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  //affichage(render)
  return (
    <div>
      <h1>Bienvenue à vous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre nom..."
          required
        />
        <button>Accedez àvotre espace</button>
      </form>
    </div>
  );
};
