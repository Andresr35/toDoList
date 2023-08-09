import { makeInput, makeLabel } from "../assets/helper";

const addReminderForm = () => {
  const reminderElement = document.createElement("form");
  reminderElement.appendChild(makeLabel("Name"));
  reminderElement.appendChild(
    makeInput("text", "reminderName", "reminderName")
  );
  reminderElement.appendChild(makeLabel("Date Due:"));
  reminderElement.appendChild(makeInput("date", "dueDate", "dueDate"));
  const button = reminderElement.appendChild(document.createElement("button"));
  button.type = "submit";
  button.innerText = "Submit";

  return reminderElement;
};

export default addReminderForm();
