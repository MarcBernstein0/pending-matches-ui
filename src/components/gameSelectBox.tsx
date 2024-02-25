import Autocomplete from '@mui/material/Autocomplete';
import { Button, Grid, TextField } from '@mui/material';

import { Dispatch, SetStateAction, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

interface GameSelectBoxProps {
  setGamesList: Dispatch<SetStateAction<string[]>>
}

export default function GameSelectBox({ setGamesList }: GameSelectBoxProps) {
  const [selectedGames, setSelectedGames] = useState<string[]>([])

  const handleSubmit = () => {
    setGamesList(selectedGames)
  }

  return (
    <Grid display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
    >
      <div>
        <h1
          style={{
            textAlign: "center"
          }}
        >GAMES TO DISPLAY</h1>
        <Autocomplete
          multiple
          freeSolo
          id="multiple-limit-tags"
          options={gameOptions}
          getOptionLabel={(option) => option}
          onChange={(event, value) => setSelectedGames(value)}
          renderInput={(params) => (
            <TextField {...params} label="Games" placeholder="Select Game" />
          )}
          sx={{ width: '500px' }}
        />
        <Link to="/tournamentDisplay">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<SendIcon>send</SendIcon>}
            sx={{
              marginTop: "5px",
              paddingLeft: "40%",
              paddingRight: "44%"
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Link>
      </div>
    </Grid>
  );
}



// interface AutocompleteOption {
//   game: string;
// }

const gameOptions: string[] = [
  'Street Fighter 6',
  'GUILTY GEAR -STRIVE-',
  'Tekken 8',
  'Under Night In-Birth',
];
