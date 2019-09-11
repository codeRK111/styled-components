import React from "react";
import { ThemeProvider } from "styled-components";
import HeaderText from "../styled-components/HeaderText";
import Input from "../styled-components/Input";
import FlexWrapper from "../styled-components/FlexWrapper";
import Button from "../styled-components/Button";

const bt = {
  mw: "150px",
  padding: "1rem"
};

const button = {
  primary: {
    ...bt,
    type: "primary"
  },
  secondary: {
    ...bt,
    type: "secondary"
  }
};

export default function Home() {
  const { primary, secondary } = button;
  return (
    <ThemeProvider theme={{ color: "#DB7093" }}>
      <FlexWrapper direction="column" at="center">
        <HeaderText>Header text</HeaderText>
        <Input type="text" placeholder="Enter some text" />
        <FlexWrapper mw="350px" margin="2rem" jc="space-between">
          <Button {...primary}>primary</Button>
          <Button {...secondary}>secondary</Button>
        </FlexWrapper>
      </FlexWrapper>
    </ThemeProvider>
  );
}
