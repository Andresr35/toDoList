const addListForm = () => {
  const addListElement = document.createElement("form");
  addListElement.id = "listForm";
  addListElement.appendChild(makeLabel("Name"));
  addListElement.appendChild(makeInput("text","listName","listName"));
  const button  = addListElement.appendChild(document.createElement('button'));
    button.type = "submit"
    button.innerText = "Submit"
  return addListElement;
};

const makeInput = (type, id, name) => {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.name = name;
  input.value = ""

  return input;
};

const makeLabel = (text) => {
  const label = document.createElement("label");
  label.innerHTML = text;

  return label;
};

export default addListForm();
