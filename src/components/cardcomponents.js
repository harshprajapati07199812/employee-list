export const cardComponent = (empObj) => {
  const cards = document.createElement("div");
  cards.classList.add("cards");
  cards.id = empObj.id;

  let image = document.createElement("img");
  image.src = empObj.imageUrl;

  let container = document.createElement("div");
  container.classList.add("continer");

  let head = document.createElement("h2");
  head.innerHTML = empObj.firstName + " " + empObj.lastName;

  let para = document.createElement("p");
  para.innerHTML = empObj.company;

  container.appendChild(head);
  container.appendChild(para);

  cards.appendChild(image);
  cards.appendChild(container);

  return cards;
};
