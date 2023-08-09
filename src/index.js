import "normalize.css";
import "./styles/global.css";
import addListForm from "./components/addListForm";

const addList = document.querySelector(".addList");
const addReminder = document.querySelector(".addReminder");
const main = document.querySelector("main");
const listDiv = document.querySelector(".lists");

const lists = [];

const List = (name) => {
  const getName = () => name;
  return { getName };
};

addList.addEventListener("click", () => {
  main.appendChild(addListForm);// add create list form to page
  addListForm.addEventListener("submit", (event) => {
    event.preventDefault();// Stop page from refreshing
    const name = event.target[0].value; 
    lists.push(List(name));
    const div = listDiv.appendChild(document.createElement("div"));
    div.id = "list" + name;
    div.innerHTML = name;
    addListForm.reset();
    addListForm.remove();
  },{once:true});
});
