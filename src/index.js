import "normalize.css";
import "./styles/global.css";
import addListForm from "./components/addListForm";
import addReminderForm from "./components/addReminderForm";

const addList = document.querySelector(".addList");
const addReminder = document.querySelector(".addReminder");
const main = document.querySelector("main");
const listDiv = document.querySelector(".lists");
const reminderDiv = document.querySelector(".listContent");

const lists = [];

const List = (name) => {
  const reminders = [];
  let quantity = 0;
  const div = document.createElement("div");
  div.id = "list" + name;
  div.innerHTML = name;

  const pushReminder = (reminder) => {
    reminders.push(reminder);
    quantity++;
    quantityElement.innerHTML = quantity;
  };
  const getName = () => name;
  const getQuantity = () => quantity;
  const quantityElement = document.createElement("div");
  quantityElement.innerHTML = quantity;
  div.appendChild(quantityElement);

  listDiv.appendChild(div);

  const makeDefault = () => (div.className = "defaultList");
  const removeDefault = () => (div.className = "");

  const getDiv = () => div;

  const renderReminders = () => {
    reminders.forEach((reminder) => reminder.render());
  };
  const removeReminders = () => {
    reminderDiv.replaceChildren();
  };

  return {
    getName,
    getQuantity,
    getDiv,
    pushReminder,
    makeDefault,
    removeDefault,
    renderReminders,
    removeReminders,
  };
};

const Reminder = (name, date) => {
  const getName = () => name;
  const getDate = () => date;
  const div = document.createElement("div");
  div.innerHTML = name + " " + date;

  const render = () => reminderDiv.appendChild(div);
  render();

  return { getDate, getName, render };
};

addList.addEventListener("click", () => {
  main.appendChild(addListForm); // add create list form to page
  addListForm.addEventListener(
    "submit",
    (event) => {
      event.preventDefault(); // Stop page from refreshing
      const name = event.target[0].value;
      addToList(List(name));
      addListForm.reset();
      addListForm.remove();
    },
    { once: true }
  );
});

/**
 * This adds a list item to the array of lists and pushes it to the DOM
 *
 * @param   {List}  list  list you want to push
 *
 * @return  {undefined}        undefined
 */
const addToList = (list) => {
  lists.push(list);
  list.getDiv().addEventListener("click", () => {
    setDefaultList(list);
  });
};

addReminder.addEventListener("click", () => {
  main.appendChild(addReminderForm);
  addReminderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    // const date = new Date(event.target[1].value);
    const date = event.target[1].value;

    currentList.pushReminder(Reminder(name, date));
    addReminderForm.reset();
    addReminderForm.remove();
  },{once:true});
});

const setDefaultList = (list) => {
  currentList.removeDefault();
  currentList.removeReminders();
  currentList = list;
  list.makeDefault();
  list.renderReminders();
};

let currentList = List("Default");
addToList(currentList);
setDefaultList(currentList);
