import { Grid } from '@mui/material';
import Footer from './components/footer';
import GameSelectBox from './components/gameSelectBox';
import TournamentDisplay from './components/tournamentDisplay';
import { useState } from 'react';



function App() {
  const [gamesList, setGamesList] = useState<string[]>([]);
  
  return (
    <span>
      <Grid display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <GameSelectBox setGamesList={setGamesList}/>
      </Grid>
      {/* <TournamentDisplay gamesList={['Tekken 8']}/> */}
      <Footer />
    </span>


  );

}

export default App;
