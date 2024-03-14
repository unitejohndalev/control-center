import React, { useEffect, useState, CSSProperties } from "react";
import LoginStyle from "./Login.module.css";
import { Button, TextField, createTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserFetch, setUserField } from "../../redux/state/loginState";
import { RootState } from "../../redux/store/store";
import loginLogo from "../../assets/logo (blue).png";
import HashLoader from "react-spinners/HashLoader";
import { motion } from "framer-motion";
import { loginAni, staggerContainer } from "../../framer/variants";
import { Navbar } from "../nav/Navbar";
import { getUsersFetch } from "../../redux/state/userState";
import { login } from "../../redux/saga/sessionSaga";
import { setError, clearError } from "../../redux/state/userState";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Add: React.FC = () => {
  //to dispatch functions from redux toolkit
  // const dispatch = useDispatch();

  //us navigation for navigating UI
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#2466a2");

  useEffect(() => {
    setLoading(loading);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // useEffect(() => {
  //   dispatch(getUsersFetch());
  // }, [dispatch]);

  // //mock data stored in user in store
  // const existingUsers = useSelector(
  //   (state: RootState) => state.userReducer.users
  // );

  // console.log(existingUsers);

  // //empty state stored in userInput in store
  // const userInput = useSelector((state: RootState) => state.inputReducer);

  // //destructure userInput
  // const { username, password } = userInput;

  // //input function, setting the state into empty string
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   dispatch(setUserField({ ...userInput, [name]: value }));
  // };

  // //submit function, comparing the value of the input to the value of the mock data
  // //if values equal, navigate to userList UI
  // const handleLoginSubmit = () => {
  //   // Check if username and password are empty
  //   if (!userInput.username.trim() || !userInput.password.trim()) {
  //     alert("Please fill in all fields");
  //     return;
  //   }

  //   // Check if username and password match any existing user
  //   const user = existingUsers.find(
  //     (user: any) => user.username === username && user.password === password
  //   );
  //   if (user) {
  //     navigate("/userlist");
  //   } else {
  //     alert("Invalid username or password");
  //   }
  // };

  const themeState = useSelector(
    (state: RootState) => state.themeReducer.themeState
  );

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorIcon, setErrorIcon] = useState<JSX.Element>();
  const [helperText, setHelperText] = useState("");

  const errorMessage = useSelector(
    (state: RootState) => state.sessionReducer.error
  );
  const [error, setErrorMessage] = React.useState<string | undefined>("");

  // const navigate = useNavigate();

  /* THIS LINE IS USED TO FETCHED THE LOGGED IN USER'S INFO */
  const loggedUser = useSelector((state: RootState) => {
    return state.sessionReducer.user;
  });

  /* THIS LINE IS USED TO FETCHED THE AUTHENTICATION STATUS */
  const isAuthenticated = useSelector((state: RootState) => {
    return state.sessionReducer.isAuthenticated;
  });

  React.useEffect(() => {
    // Remove this entire useEffect block
  }, []);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login({ username, password }));
    dispatch(clearError());
  };

  React.useEffect(() => {
    if (errorMessage === null) {
      setErrorMessage(undefined);
      dispatch(clearError());
      console.log("there's no error", error);
    } else {
      setErrorMessage(errorMessage);
      dispatch(clearError());
      console.log("may error ka!", error);
    }
  }, [errorMessage, error, username, password, dispatch]);

  console.log(username, password, isAuthenticated);
  return (
    <>
      {loading ? null : <Navbar />}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className={LoginStyle.LoginContainer}>
        {loading ? (
          <HashLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <motion.div className={LoginStyle.formContainer} variants={loginAni}>
            <img src={loginLogo} alt="" className={LoginStyle.loginLogo} />
            <form
              className={
                themeState
                  ? LoginStyle.DarkFormContainer
                  : LoginStyle.LightFormContainer
              }
              onSubmit={handleLogin}>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                name="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!isValid}
                InputProps={{
                  endAdornment: errorIcon,
                }}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                autoComplete="current-password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!isValid}
                InputProps={{
                  endAdornment: errorIcon,
                }}
                type="password"
              />
              {error && (
                <div style={{ color: "red", marginBottom: "10px" }}>
                  {error}
                </div>
              )}
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#2466A2",
                }}>
                <p className={LoginStyle.ButtonLetter}>Log In</p>
              </Button>
            </form>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default Add;
