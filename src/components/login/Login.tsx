
import React, { useEffect } from "react";
import {
  FormContainer,
  AddContainer,
  FormTitle,
  ButtonLetter,
} from "./AddStyles";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserField } from "../../redux/state/loginState";


const Add: React.FC = () => {
  //mock data stored in user in store
  const existingUsers = useSelector((state: any) => state.user.personValue);

  //empty state stored in userInput in store
  const userInput = useSelector((state: any) => state.userInput);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username, password } = userInput;
 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setUserField({ ...userInput, [name]: value }));
  };

  const handleLoginSubmit = () => {
    // Check if username and password are empty
    if (!userInput.username.trim() || !userInput.password.trim()) {
      alert("Please fill in all fields");
      return;
    }

    // Check if username and password match any existing user
    const user = existingUsers.find(
      (user: any) => user.username === username && user.password === password
    );
    if (user) {
      navigate("/userlist");
    } else {
      alert("Invalid username or password");
    }
  };
  

  return (
    <AddContainer>
      <FormContainer onSubmit={handleLoginSubmit}>
        <FormTitle>Control Center</FormTitle>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          <ButtonLetter>Log In</ButtonLetter>
        </Button>
      </FormContainer>
    </AddContainer>
  );
};

export default Add;
