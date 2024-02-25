import GameSelectBox from './components/gameSelectBox';
import TournamentDisplay from './components/tournamentDisplay';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [gamesList, setGamesList] = useState<string[]>([]);
  
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route key='SelectGamesBox' path='/' element={<GameSelectBox setGamesList={setGamesList} />} />
          <Route key='TournamentDisplay' path='/tournamentDisplay' element={<TournamentDisplay gamesList={gamesList} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;
