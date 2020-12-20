import { cardComponent } from "../components/cardcomponents.js";

export const renderEmployee = (employees) => {
  const rootDiv = document.getElementById("root");
  // const card = cardcomponent(employees);
  // rootDiv.appendChild(card);
  const card = employees.forEach((employeeObj) => {
    const card = cardComponent(employeeObj);
    // console.log(card);
    rootDiv.appendChild(card);
    // console.log(rootDiv);
  });
  //   console.log(rootDiv);
  // return employees.forEach(employee => {
  //  rootDiv.appendChild(cardComponent(employee));
  // });
};
