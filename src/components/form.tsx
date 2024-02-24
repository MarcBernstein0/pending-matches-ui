import React, { useState } from "react";
import "../css/footer.css"
import { Autocomplete, Button, Container, IconButton, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import RemoveIcon from '@mui/icons-material/Remove';

const Form = () => {

  const [inputFields, setInputFields] = useState([
    { game: "Street Fighter 6" },
  ]);

  const [userInput, setUserInput] = useState("");

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(event);
    setUserInput(event.target.value);
  };

  // const handle 

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
      <h1
        style={{
          textAlign: "center"
        }}
      >GAMES TO DISPLAY</h1>
      <Container className="Container">
        <form onSubmit={handleSubmit} >
          {inputFields.map((inputField, index) => (
            <div key={index} >
              <p>{inputField.game}</p>
              <IconButton sx={{
                display: 'inline-block'
              }} onClick={() => handleRemoveFields(index)}>
                <RemoveIcon />
              </IconButton>
            </div>
          ))}
          <TextField
            name="gameName"
            label="Game Name"
            variant="filled"
            value={userInput}
            onChange={(event) => handleChangeInput(event)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<SendIcon>send</SendIcon>}
            onClick={handleAddFields}
          >
            Add Game
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<SendIcon>send</SendIcon>}
            onClick={handleSubmit}
          >
            Submit Form
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Form;
