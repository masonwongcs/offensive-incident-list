import styled, { createGlobalStyle } from "styled-components";

export const PrimaryColor = "#004b88";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
`;

export const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  @media screen and (max-width: 900px) {
    width: 95%;
  }
`;

export default GlobalStyle;
