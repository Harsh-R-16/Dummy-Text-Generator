import styled from "styled-components";

let Section = styled.section`
  width: 900px;
  max-width: 94%;
  margin: 0px auto;
  text-align: center;
  padding: 20px 0px;

  h1 {
    font-family: ubuntu, sans-serif;
    font-size: 30px;
    letter-spacing: 1.45px;
  }

  article {
    margin-top: 25px;
    text-align: left;
    width: 100%;
    letter-spacing: 1px;
    line-height: 1.4em;
  }
  form {
    padding-top: 10px;
  }
  label {
    font-family: ubuntu, sans-serif;
    font-size: 19px;
    letter-spacing: 1.4px;
  }
  button {
    padding: 5px 12px;
    text-transform: uppercase;
    background-color: #1995ce;
    color: white;
    letter-spacing: 1.4px;
    border: none;
  }

  button:hover {
    background-color: #0a85be;
  }

  input {
    padding: 3px 12px;
    width: 98px;
    margin: 0px 10px;
    padding-left: 5px;
  }
  p {
    color: rgb(73, 72, 72);
    line-height: 24px;
    margin: 2px;
  }
  p::first-letter {
    color: red;
    margin-left: 18px;
    font-size: 20px;
    text-transform: uppercase;
  }
  i {
    font-size: 27px;
    color: #1995ce;
    margin-top: 20px;
    transition: 0.2s linear;
  }
  i:hover {
    color: #0a85be;
    transform: scale(1.1);
  }
  @media (max-width: 550px) {
    h1 {
      font-size: 24px;
    }
    label {
      font-size: 16px;
    }
    button {
      margin: 15px;
    }
    input {
      height: 20px;
    }
  }
`;

export { Section };
