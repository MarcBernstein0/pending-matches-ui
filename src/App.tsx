import { Grid } from '@mui/material';
import Footer from './components/footer';
import GameSelectBox from './components/gameSelectBox';
import TournamentDisplay from './components/tournamentDisplay';
import { SetStateAction, useState } from 'react';
import { BrowserRouter, Link, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';


function App() {
  const [gamesList, setGamesList] = useState<string[]>([]);
  
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route key='SelectGamesBox' path='/' element={<GameSelectBox setGamesList={setGamesList} />} />
          <Route key='TournamentDisplay' path='/tournamentDisplay' element={<TournamentDisplay gamesList={gamesList} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );

}

export default App;
