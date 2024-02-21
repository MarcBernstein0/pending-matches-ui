import React, { useState } from "react";
import "../css/footer.css"
import { Button, Container, Icon, IconButton, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// const useStyles = makeStyles((theme: { spacing: (arg0: number) => any; }) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//     },
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

const Form = () => {
  // const classes = useStyles();

  const [inputFields, setInputFields] = useState([
    { game: "blah" },
    { game: "game" },
  ]);

  const [userInput, setUserInput] = useState("");

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const values = [...inputFields, { game: userInput }];
    setInputFields(values);
    console.log(inputFields);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { game: "" }]);
  };

  const handleRemoveFields = (index: number) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <div className="Form">
      <h1>Dynamic Form In React</h1>
      <Container className="Container">
        <form onSubmit={handleSubmit}>
          {inputFields.map((inputField, index) => (
            <div key={index}>
              <p>{inputField.game}</p>
              <IconButton onClick={() => handleRemoveFields(index)}>
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={() => handleAddFields()}>
                <AddIcon />
              </IconButton>
            </div>
          ))}
          <TextField
            name="firstName"
            label="First Name"
            variant="filled"
            value={userInput}
            onChange={(event) => handleChangeInput(event)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<Icon>send</Icon>}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Form;
