import "normalize.css";
import "./styles/global.css";
import addListForm from "./components/addListForm";
import addReminderForm from "./components/addReminderForm";

const addList = document.querySelector(".addList");
const addReminder = document.querySelector(".addReminder");
const main = document.querySelector("main");
const listDiv = document.querySelector(".lists");

const lists = [];


const List = (name) => {
    let quantity = 0;
 const reminders = [];
 const pushReminder =(reminder)=>reminders.push(reminder);
  const getName = () => name;
  const getQuantity = ()=>quantity;
  
  return { getName,getQuantity,pushReminder};
};

let currentList = List("Default");
lists.push(currentList);

addList.addEventListener("click", () => {
  main.appendChild(addListForm);// add create list form to page
  addListForm.addEventListener("submit", (event) => {
    event.preventDefault();// Stop page from refreshing
    const name = event.target[0].value; 
    const newlist = List(name);
    lists.push(newlist);
    const div = listDiv.appendChild(document.createElement("div"));
    div.id = "list" + name;
    div.innerHTML = name;
    const quantity = document.createElement('div');
    quantity.innerHTML = newlist.getQuantity();
    div.appendChild(quantity);
    addListForm.reset();
    addListForm.remove();
  },{once:true});
});

addReminder.addEventListener("click",()=>{
    main.appendChild(addReminderForm);
    addReminderForm.addEventListener("submit",()=>{

        
    })
})
