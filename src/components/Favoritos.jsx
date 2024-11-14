import { useFavoritos } from '../context/FavoritosContext';

export default function Favoritos() {
  const { favoritos, removeFavorito } = useFavoritos();

  return (
    <div>
      <h2>Mis Favoritos</h2>
      <ul>
        {favoritos.map((receta) => (
          <li key={receta.id}>
            <h3>{receta.nombre}</h3>
            <button onClick={() => removeFavorito(receta)}>Eliminar de Favoritos</button>
          </li>
        ))}
      </ul>
    </div>
  );
}