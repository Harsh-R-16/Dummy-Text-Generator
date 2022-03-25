import "./lorem.css";
import text from "./data";
import { useState } from "react";
import { Section } from "./styledComponents";
import Form from "./form";
const Lorem = () => {
  let ran = () => Math.floor(Math.random() * text.length);
  let [val, setVal] = useState([text[ran()]]);
  const formSubmit = (e) => {
    e.preventDefault();
    let number = e.target.elements[0].value;
    let res = [];
    for (let i = 0; i < number; i++) {
      res.push(text[ran()]);
    }
    setVal(res);
  };
  let copy = () => {
    let text = val.join("\n\n");
    navigator.clipboard.writeText(text);
    alert(`Text Copied to clipboard \n\n ${val[0].slice(0, 108)}...........`);
  };
  return (
    <>
      <Section>
        <h1>LOREM IPSUM GENERATOR!!</h1>
        <Form submit={formSubmit} copy={copy} />
        <article id="myInput">
          {val.map((i) => {
            return (
              <>
                <p key={Math.random()}>{i}</p>
                <br />
              </>
            );
          })}
        </article>
      </Section>
    </>
  );
};
export default Lorem;
