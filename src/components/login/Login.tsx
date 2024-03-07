// import React from "react";
// import {
//   FormContainer,
//   AddContainer,
//   FormTitle,
//   ButtonLetter,
// } from "./AddStyles";
// import { Button, TextField } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";

// const Add: React.FC = () => {
//   const dispatch = useDispatch();
//   const existingUsers = useSelector((state: any) => state.user.personValue);

//   console.log(existingUsers);
//   return (
//     <AddContainer>
//       <FormContainer>
//         <FormTitle>Control Center</FormTitle>
//         <TextField id="outlined-basic" label="UserName" variant="outlined" />
//         <TextField id="outlined-basic" label="Password" variant="outlined" />
//         <Button variant="contained" className="text-[2rem]">
//           <ButtonLetter>Log In</ButtonLetter>
//         </Button>
//       </FormContainer>
//     </AddContainer>
//   );
// };

// export default Add;
import React, { useState } from "react";
import {
  FormContainer,
  AddContainer,
  FormTitle,
  ButtonLetter,
} from "./AddStyles";
import { Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Add: React.FC = () => {
  const existingUsers = useSelector((state: any) => state.user.personValue);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleLogin = () => {
    // Check if username and password are empty
    if (!username.trim() || !password.trim()) {
      alert("Please fill in all fields");
      return;
    }

    // Check if username and password match any existing user
    const user = existingUsers.find(
      (user: any) => user.name === username && user.password === password
    );
    if (user) {
      navigate("/userlist");
    } else {
      alert("Invalid username or password");
    }
  };
  console.log(existingUsers);

  return (
    <AddContainer>
      <FormContainer>
        <FormTitle>Control Center</FormTitle>
        <TextField
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          className="text-[2rem]"
          onClick={handleLogin}>
          <ButtonLetter>Log In</ButtonLetter>
        </Button>
      </FormContainer>
    </AddContainer>
  );
};

export default Add;
