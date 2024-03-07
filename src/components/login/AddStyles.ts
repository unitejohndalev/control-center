
import styled from "styled-components";

export const AddContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  justifyItems: "center",
  height: "100vh",
});

export const FormTitle = styled.p({
  fontSize: "2rem",
  textAlign: "center",
  fontFamily: "Montserrat",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
});

export const FormContainer = styled.form({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "500px",
  rowGap: "2rem",
});

export const ButtonLetter = styled.div({
  fontSize: "1rem",
});
