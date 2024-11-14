import { useParams } from 'react-router-dom';
import { useRecetas } from '../hooks/useRecetas';
import { useFavoritos } from '../context/FavoritosContext';

export default function RecetaDetalle() {
  const { id } = useParams();
  const recetas = useRecetas();
  const { favoritos, addFavorito, removeFavorito } = useFavoritos();
 console.log(recetas)
  const receta = recetas.find(rec => rec.id === id);
  console.log(receta);
  console.log(id);
  const isFavorito = () => favoritos.some((r) => r.id === receta?.id);

  const handleFavorito = () => {
    if (isFavorito()) {
      removeFavorito(receta);
    } else {
      addFavorito(receta);
    }
  };

  return (
    <div>
      <h2>{receta?.nombre}</h2>
      <button onClick={handleFavorito}>
        {isFavorito() ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
      </button>
    </div>
  );
}