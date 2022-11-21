import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  // state(etats,données)
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  //comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
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
