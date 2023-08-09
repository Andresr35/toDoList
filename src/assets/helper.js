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

  export {makeInput,makeLabel};