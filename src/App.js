import { useState } from 'react';

function App() {
  //states (états,données)
  const [prenom, setPrenom] = useState('');

  //comportements
  const handleChange = (e) => {
    const afterChange = e.target.value;
    setPrenom(afterChange);
  };
  const handleClick = () => {
    alert('Bonjour' + '' + prenom);
  };
  // affichage (render)
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form action="">
        <input
          type="text"
          value={prenom}
          onChange={handleChange}
          placeholder="Entrez votre prénom"
        />
        <button onClick={handleClick}> Accéder à votre espace</button>
      </form>
    </div>
  );
}
export default App;
