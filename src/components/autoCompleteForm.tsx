import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoCompleteForm() {
    return (
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Games" />}
    />
    );
}

interface AutocompleteOption {
    label: string;
}

const options: AutocompleteOption[] = [
    {
        label: 'Street Fighter 6',
    },
    {
        label: 'GUILTY GEAR -STRIVE-',
    },
    {
        label: 'Tekken 8',
    },
    {
        label: 'Under Night In-Birth',
    },
]