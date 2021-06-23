const body = document.getElementById("body-project");
const menu = document.createElement("div");
menu.className = "menu-style";
body.appendChild(menu);

const icon = document.createElement("i");
icon.className = "fas fa-times";
menu.appendChild(icon);

const menuList = document.createElement("ul");
menuList.className = "menu-list";
menu.appendChild(menuList);

const portfolio = document.createElement("li");
portfolio.className = "portfolio";
const portfolioLink = document.createElement("a");
portfolioLink.className = "mobile-link";
portfolioLink.textContent = "Portfolio";
portfolioLink.href = "#portfolio";
portfolio.appendChild(portfolioLink);
menuList.appendChild(portfolio);

const about = document.createElement("li");
about.className = "about";
const aboutLink = document.createElement("a");
aboutLink.className = "mobile-link";
aboutLink.textContent = "About";
aboutLink.href = "#about";
about.appendChild(aboutLink);
menuList.appendChild(about);

const contact = document.createElement("li");
contact.className = "contatc-content";
const contactLink = document.createElement("a");
contactLink.className = "mobile-link";
contactLink.textContent = "Contact";
contactLink.href = "#contact";
contact.appendChild(contactLink);
menuList.appendChild(contact);

const hamburger = document.getElementById("mob-menu");
hamburger.addEventListener("click", () => {
  menu.style.display = "block";
  document.getElementById("main").style.filter = "blur(5px)";
});

icon.addEventListener("click", () => {
  menu.style.display = "none";
  document.getElementById("main").style.filter = "none";
});

document
  .getElementsByClassName("mobile-link")[0]
  .addEventListener("click", () => {
    menu.style.display = "none";
    document.getElementById("main").style.filter = "none";
    document.getElementsByClassName("card");
  });

document
  .getElementsByClassName("mobile-link")[1]
  .addEventListener("click", () => {
    menu.style.display = "none";
    document.getElementById("main").style.filter = "none";
  });

document
  .getElementsByClassName("mobile-link")[2]
  .addEventListener("click", () => {
    menu.style.display = "none";
    document.getElementById("main").style.filter = "none";
  });

// =======================================================================
// --------------------- Details popup window MOBILE----------------------
// =======================================================================

// ************Create HTML- project section************

function ProjectCard(
  imageLink,
  imageAltText,
  title,
  descriptionName,
  descriptionPosition,
  descriptionYear,
  descriptionContetnt,
  technologies
) {
  this.image = {
    link: imageLink,
    altText: imageAltText,
  };
  this.title = title;
  this.descriptionName = descriptionName;
  this.descriptionPosition = descriptionPosition;
  this.descriptionYear = descriptionYear;
  this.descriptionContetnt = descriptionContetnt;
  this.technologies = technologies;
}

let myProjects = [];

myProjects.push(
  new ProjectCard(
    "images/image1.png",
    "Name of Project",
    "Tonic",
    "CANOPY",
    "Back End Dev",
    "2015",
    "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    ["html", "css", "javaScript"]
  )
);

myProjects.push(
  new ProjectCard(
    "images/image2.png",
    "Name of Project",
    "Tonic",
    "CANOPY",
    "Back End Dev",
    "2015",
    "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    ["html", "css", "javaScript"]
  )
);

myProjects.push(
  new ProjectCard(
    "images/image3.png",
    "Name of Project",
    "Tonic",
    "CANOPY",
    "Back End Dev",
    "2015",
    "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    ["html", "css", "javaScript"]
  )
);

myProjects.push(
  new ProjectCard(
    "images/image4.png",
    "Name of Project",
    "Tonic",
    "CANOPY",
    "Back End Dev",
    "2015",
    "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    ["html", "css", "javaScript"]
  )
);
console.log(myProjects);

const projectSection = document.getElementById("portfolio");
const cardUL = document.createElement("ul");
cardUL.className = "cards-project-list";
projectSection.appendChild(cardUL);

for (i = 0; i < myProjects.length; i++) {
  let cardList = document.createElement("li");
  cardList.className = "card";
  cardUL.appendChild(cardList);

  let cardImage = document.createElement("img");
  cardImage.className = `card-image${i}`;
  cardImage.src = myProjects[i].image.link;
  cardImage.altText = myProjects[i].image.altText;
  cardList.appendChild(cardImage);

  let cardContent = document.createElement("div");
  cardContent.className = "card-content";
  cardList.appendChild(cardContent);

  let cardTitle = document.createElement("h2");
  cardTitle.className = "card-title";
  cardTitle.textContent = myProjects[i].title;
  cardContent.appendChild(cardTitle);

  let cardDescription = document.createElement("p");
  cardDescription.className = "card-description";
  cardDescription.textContent = `${myProjects[i].descriptionName}`;
  cardContent.appendChild(cardDescription);

  let cardSpan = document.createElement("span");
  cardSpan.textContent = `&#9679; ${myProjects[i].descriptionPosition} &#9679; ${myProjects[i].descriptionYear} `;
  cardDescription.appendChild(cardSpan);

  let cardDescriptionContent = document.createElement("p");
  cardDescriptionContent.textContent =
    "A daily selection of privately personalized reads; no accounts or sign-ups required.";
  cardDescriptionContent.className = "card-text-content";
  cardContent.appendChild(cardDescriptionContent);

  let cardTechnologiesList = document.createElement("ul");
  cardTechnologiesList.className = "butonns-languages";
  cardContent.appendChild(cardTechnologiesList);

  myProjects[i].technologies.forEach((element) => {
    let cardTechnologie = document.createElement("li");
    cardTechnologie.className = "btn-lg";
    cardTechnologie.textContent = element;
    cardTechnologiesList.appendChild(cardTechnologie);
  });

  let cardButton = document.createElement("button");
  cardButton.className = "btn-project";
  cardButton.textContent = "See Project";
  cardContent.appendChild(cardButton);
  cardButton.id = i;
  cardButton.addEventListener("click", (e) => {
    seeProjectButton(e.target.id);
  });
}
