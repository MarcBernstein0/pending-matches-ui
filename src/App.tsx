import { Moment } from 'moment';
import GameSelectBox from './components/dateAndGameSelect';
import TournamentDisplay from './components/tournamentDisplay';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import moment from 'moment';


function App() {
  const [gamesList, setGamesList] = useState<string[]>([]);
  const [date, setDate] = useState<Moment>(moment());
  
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route key='SelectGamesBox' path='/' element={<GameSelectBox setGamesList={setGamesList} setDate={setDate} />} />
          <Route key='TournamentDisplay' path='/tournamentDisplay' element={<TournamentDisplay gamesList={gamesList} date={date} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;
