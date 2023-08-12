/**
 * @typedef  {Object}  reminderFunctions
 * @property  {string} getName
 * @property  {string}  getDate
 * @property  {HTMLDivElement} getReminder 
 */

/**
 * reminder
 *
 * @param   {string}  name  name
 * @param   {string}  date  date
 *
 * @return  {reminderFunctions}  
 */
const Reminder = (name, date) => {
    const getName = () => name;
    const getDate = () => date;
    const div = document.createElement("div");
    div.innerHTML = name;
    const dateElement = div.appendChild(document.createElement("p"));
    dateElement.innerHTML = "date";
  
    const getReminder = () => div;
  
    return { getDate, getName, getReminder };
  };

  export default Reminder;