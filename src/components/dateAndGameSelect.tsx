import { Button, Grid, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

import SendIcon from '@mui/icons-material/Send';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment, { Moment } from 'moment';
import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

interface dateAndGameSelectProp {
  setGamesList: Dispatch<SetStateAction<string[]>>
  setDate: Dispatch<SetStateAction<Moment>>
}

export default function DateAndGameSelect({ setGamesList , setDate}: dateAndGameSelectProp) {
  const [selectedGames, setSelectedGames] = useState<string[]>([])
  const [date, setDateView] = useState<Moment | null>(moment());

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (date) {
      setDate(date);
      setGamesList(selectedGames);
      navigate("/tournamentDisplay")
    }
  }

  return (
    <div>
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
          >CHOOSE GAMES AND DATE</h1>
          <Autocomplete
            multiple
            freeSolo
            id="multiple-limit-tags"
            options={gameOptions}
            getOptionLabel={(option) => option}
            onChange={(_event, value) => setSelectedGames(value)}
            renderInput={(params) => (
              <TextField {...params} label="Games" placeholder="Select Game" />
            )}
            sx={{
              width: '500px',
              marginLeft: '6.5%'
            }}
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="Tournament Date"
              value={date}
              onChange={(newValue) => setDateView(newValue)}
              sx={{
                width: '500px',
                marginTop: "15px",
                marginLeft: '6.5%'
              }} />
          </LocalizationProvider>
          <Button
            variant="contained"
            color="primary"
            disabled={!date}
            endIcon={<SendIcon>send</SendIcon>}
            sx={{
              marginTop: "5px",
              marginLeft: "6.5%",
              paddingLeft: "35%",
              paddingRight: "38%"
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </Grid>
      <Footer />
    </div>
  );
}

const gameOptions: string[] = [
  'Street Fighter 6',
  'GUILTY GEAR -STRIVE-',
  'Tekken 8',
  'Under Night In-Birth',
];
