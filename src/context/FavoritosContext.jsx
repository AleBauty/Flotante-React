import { createContext, useState, useContext } from 'react';

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const addFavorito = (receta) => {
    setFavoritos([...favoritos, receta]);
  };

  const removeFavorito = (receta) => {
    setFavoritos(favoritos.filter((r) => r.id !== receta.id));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, addFavorito, removeFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => useContext(FavoritosContext);