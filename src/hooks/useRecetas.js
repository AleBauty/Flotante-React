import { useState, useEffect } from 'react';

export function useRecetas() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const fetchRecetas = async () => {
      const response = await fetch('/recetas.json');
      const data = await response.json();
      setRecetas(data);
    };
    fetchRecetas();
  }, []);

  return recetas;
}