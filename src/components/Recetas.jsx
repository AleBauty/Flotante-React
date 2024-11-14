import { useRecetas } from '../hooks/useRecetas';
import { useFavoritos } from '../context/FavoritosContext';
import { useNavigate } from 'react-router-dom';

export default function Recetas() {
  const recetas = useRecetas();
  const { favoritos, addFavorito, removeFavorito } = useFavoritos();
  const navigate = useNavigate();

  const handleRecetaClick = (receta) => {
    navigate(`/receta/${receta.id}`);
  };

  const isFavorito = (receta) => favoritos.some((r) => r.id === receta.id);

  const handleFavorito = (receta) => {
    if (isFavorito(receta)) {
      removeFavorito(receta);
    } else {
      addFavorito(receta);
    }
  };

  return (
    <div>
      <h2>Todas las Recetas</h2>
      <ul>
        {recetas.map((receta) => (
          <li key={receta.id}>
            <h3 onClick={() => handleRecetaClick(receta)}>{receta.nombre}</h3>
            <button onClick={() => handleFavorito(receta)}>
              {isFavorito(receta) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}