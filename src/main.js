import { renderEmployee } from "./helper/renderEmploye.js";
// renderEmployee()

import { getUser } from "./data.js";
let employees = [];
window.onload = async () => {
  employees = await getUser();
  renderEmployee(employees);
};
