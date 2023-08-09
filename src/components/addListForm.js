import { makeInput,makeLabel } from "../assets/helper";

const addListForm = () => {
  const addListElement = document.createElement("form");
  addListElement.appendChild(makeLabel("Name"));
  addListElement.appendChild(makeInput("text","listName","listName"));
  const button  = addListElement.appendChild(document.createElement('button'));
    button.type = "submit"
    button.innerText = "Submit"
  return addListElement;
};



export default addListForm();
