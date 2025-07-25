// Obtener el año actual
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

// Obtener la fecha de última modificación del documento
const lastMod = document.querySelector("#lastModified");
lastMod.textContent = document.lastModified;

//esto muestra el menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//temples

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "San Jose Costa Rica",
      location: "San Jose, Costa Rica",
      dedicated: "2000, June, 4",
      area: 10700,
      imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/san-jose-costa-rica-temple/san-jose-costa-rica-temple-50536.jpg"
    },
       {
      templeName: "Roma Italy",
      location: "Roma, Italy",
      dedicated: "2019, March, 12",
      area: 41010,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
       {
      templeName: "Antofagasta Chiley",
      location: "Antofagasta, Chile",
      dedicated: "2025, June, 15",
      area: 26163,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-60190.jpg"
    },
];

displayTemples(temples);

function displayTemples(filteredTemples) {
  document.querySelector(".temples").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
    
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);
    
    document.querySelector(".temples").appendChild(card)
  });
}

//home
const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
  const home = displayTemples(temples);

  document.querySelector("main h2").textContent = "Home";
});

//old temples filter
const oldTemplesLink = document.querySelector("#old");

oldTemplesLink.addEventListener("click", () => {
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });

  document.querySelector("main h2").textContent = "Temples Dedicated Before 1900";
  displayTemples(oldTemples); 
});

//new temples filter
const newTemplesLink = document.querySelector("#new");

newTemplesLink.addEventListener("click", () => {
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  
  document.querySelector("main h2").textContent = "Temples Dedicated After 2000";
  displayTemples(newTemples); 
});

//large temples filter
const largeTemplesLink = document.querySelector("#large");

largeTemplesLink.addEventListener("click", () => {
  const largeTemples = temples.filter(temple => temple.area > 90000);

  document.querySelector("main h2").textContent = "Large Temples";
  displayTemples(largeTemples); 
});

//small temples filter
const smallTemplesLink = document.querySelector("#small");

smallTemplesLink.addEventListener("click", () => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  
  document.querySelector("main h2").textContent = "Small Temples";
  displayTemples(smallTemples); 
});