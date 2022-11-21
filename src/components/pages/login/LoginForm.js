import React, { useState } from "react";

export default function LoginForm() {
  // state(etats,données)
  const [inputValue, setInputValue] = useState("");

  //comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //affichage(render)
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue à vous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre nom..."
        required
      />
      <button>Accedez àvotre espace</button>
    </form>
  );
}
