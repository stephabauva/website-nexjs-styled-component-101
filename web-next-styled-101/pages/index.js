//regular imports
import React, { useState } from "react";
import Head from "next/head";
//import tyles
import { HeaderFlex, Heading } from "../styles/HomePage.styles.js";
import {
  SubmitFormButton,
  BtnContainer,
} from "../styles/SubmitButton.styles.js";

export default function Home() {
  const [BtnColor, setBtnColor] = useState(0);

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderFlex>
        <Heading changeTextColor={BtnColor}>NEXT</Heading>
      </HeaderFlex>

      <BtnContainer>
        <p>Material-UI + Styled-Components:</p>
        <SubmitFormButton
          onClick={() => (BtnColor ? setBtnColor(0) : setBtnColor(1))}
          active={BtnColor}
        >
          {BtnColor ? "Clicked" : "Click Me"}
        </SubmitFormButton>
      </BtnContainer>
    </>
  );
}
