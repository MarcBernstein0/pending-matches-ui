import Autocomplete from '@mui/material/Autocomplete';
import { Button, TextField } from '@mui/material';

import { Dispatch, SetStateAction, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

interface GameSelectBoxProps {
  setGamesList: Dispatch<SetStateAction<string[]>>
}

export default function GameSelectBox({ setGamesList }: GameSelectBoxProps) {
  const [selectedGames, setSelectedGames] = useState<string[]>([])

  const handleSubmit = () => {
    console.log(selectedGames);
    setGamesList(selectedGames)
  }

  return (
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

    </div>
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
