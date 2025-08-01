// Obtener el año actual
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

// Obtener la fecha de última modificación del documento
const lastMod = document.querySelector("#lastModified");
lastMod.textContent = document.lastModified;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.querySelector("#productName");

    while (productSelect.options.length > 1) {
        productSelect.remove(1);
    }

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });


}); 

let reviewCount = localStorage.getItem("reviewCount");

if (reviewCount === null) {
  reviewCount = 0;
} else {
  reviewCount = parseInt(reviewCount);
}

reviewCount++;
localStorage.setItem("reviewCount", reviewCount);   
