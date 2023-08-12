/**
 * List element
 *
 * @param   {string}  name  name of Object
 *
 * @return  {listReturns}        object with some functions
 */
const List = (name) => {
    const reminders = [];
    let quantity = 0;

    const div = document.createElement("div");
    const nameElement = div.appendChild(document.createElement('div'));
    const quantityElement = div.appendChild(document.createElement("div"));
    const title = document.querySelector(".title");
    const listDiv = document.querySelector(".lists");
    const reminderDiv = document.querySelector(".listContent");

    const getName = () => name;
    const getQuantity = () => quantity;
    const getDiv = () => div;

    nameElement.innerHTML = name;
    quantityElement.innerHTML = quantity;
  
    const pushReminder = (reminder) => {
      reminders.push(reminder);
      reminderDiv.appendChild(reminder.getReminder());
      quantity++;
      quantityElement.innerHTML = quantity;
    };
  
    listDiv.appendChild(div);
  
    const makeDefault = () => {
      div.className = "defaultList";
      title.innerHTML = name;
    };

    const removeDefault = () => (div.className = "");
  
    const renderReminders = () => {
      reminders.forEach((reminder) => reminderDiv.appendChild(reminder.getReminder()));
    };

  const removeReminders = () => reminderDiv.replaceChildren();

  
    return {
      getName,
      getQuantity,
      getDiv,
      pushReminder,
      makeDefault,
      removeDefault,
      renderReminders,
      removeReminders
    };
  };

  
  export default List;