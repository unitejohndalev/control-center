import React from "react";
import LoginStyle from "./Login.module.css"
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserField } from "../../redux/state/loginState";
import { RootState } from "../../redux/store/store";

const Add: React.FC = () => {

  //mock data stored in user in store
  const existingUsers = useSelector(
    (state: any) => state.userReducer.personValue
  );

 

  //empty state stored in userInput in store
  const userInput = useSelector((state: any) => state.inputReducer);

  //to dispatch functions from redux toolkit
  const dispatch = useDispatch();

  //us navigation for navigating UI
  const navigate = useNavigate();

  //destructure userInput
  const { username, password } = userInput;

  //input function, setting the state into empty string
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setUserField({ ...userInput, [name]: value }));
  };

  //submit function, comparing the value of the input to the value of the mock data
  //if values equal, navigate to userList UI
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

   const themeState = useSelector(
     (state: RootState) => state.themeReducer.themeState
   );
 

  return (
    <div className={LoginStyle.LoginContainer}>
      <form
        className={
          themeState
            ? LoginStyle.DarkFormContainer
            : LoginStyle.LightFormContainer
            
        }
        onSubmit={handleLoginSubmit}>
        <p className={LoginStyle.FormTitle}>Control Center</p>
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
          <p className={LoginStyle.ButtonLetter}>Log In</p>
        </Button>
      </form>
    </div>
  );
};

export default Add;
