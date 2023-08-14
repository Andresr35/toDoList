import "normalize.css";
import "./styles/global.css";
import addListForm from "./components/addListForm";
import addReminderForm from "./components/addReminderForm";
import Reminder from "./components/Reminder";
import List from "./components/List";

const addList = document.querySelector(".addList");
const addReminder = document.querySelector(".addReminder");
const main = document.querySelector("main");

const lists = [];
let currentList = List("Default");

const setDefaultList = (list) => {
  currentList.removeDefault();
  currentList.removeReminders();
  currentList = list;
  list.makeDefault();
  list.renderReminders();
};

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

addList.addEventListener("click", () => {
  main.appendChild(addListForm); // add csreate list form to page
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

addReminder.addEventListener("click", () => {
  main.appendChild(addReminderForm);
  addReminderForm.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      const name = event.target[0].value;
      const date = event.target[1].value;
      currentList.pushReminder(Reminder(name, date));
      addReminderForm.reset();
      addReminderForm.remove();
    },
    { once: true }
  );
});

addToList(currentList);
setDefaultList(currentList);
