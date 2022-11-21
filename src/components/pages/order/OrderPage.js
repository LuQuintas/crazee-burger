import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  //state (états,données)
  const { username } = useParams();

  //comportements

  //affichage (render)
  return (
    <div>
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
