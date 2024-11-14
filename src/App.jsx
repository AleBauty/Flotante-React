import Navbar from './components/Navbar';
import Recetas from './components/Recetas';
import Favoritos from './components/Favoritos';
import RecetaDetalle from './components/RecetaDetalle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FavoritosProvider } from './context/FavoritosContext';

function App() {
  return (
    <Router>
      <FavoritosProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Recetas />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/receta/:id" element={<RecetaDetalle />} />
        </Routes>
      </FavoritosProvider>
    </Router>
  );
}

export default App;