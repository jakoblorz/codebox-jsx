import { Div, H1, render } from "./html";

render(`
  ${H1("Hello Parcel!")}
  ${Div(`
    Look there
    <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
    for more info about Parcel.
  `)}
`);
