import "../styles/menu.css";
// Import all menu food assets
import pizzas from "../assets/menu-items/pizzas.png";
import pastas from "../assets/menu-items/pastas.png";
import ramen from "../assets/menu-items/ramen.png";
import sushi from "../assets/menu-items/sushi.png";
import desserts from "../assets/menu-items/desserts.png";
import drinks from "../assets/menu-items/drinks.png";

const menuItems = [
    {
        name: "Pizzas",
        imageUrl: pizzas,
    },
    {
        name: "Pastas",
        imageUrl: pastas,
    },
    {
        name: "Ramen",
        imageUrl: ramen,
    },
    {
        name: "Sushi",
        imageUrl: sushi,
    },
    {
        name: "Desserts",
        imageUrl: desserts,
    },
    {
        name: "Drinks",
        imageUrl: drinks,
    },
];

const createMenuItem = (name, imageUrl) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemName = document.createElement("p");
    itemName.classList.add("item-name");
    itemName.innerText = name;

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    const imgElem = new Image();
    imgElem.classList.add("item-img");
    imgElem.src = imageUrl;
    imgContainer.appendChild(imgElem);

    menuItem.appendChild(itemName);
    menuItem.appendChild(imgElem);
    return menuItem;
}

const loadMenu = () => {
    const main = document.querySelector("main");
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menuItems.forEach(menuItem => {
        const menuItemElem = createMenuItem(menuItem.name, menuItem.imageUrl);
        menu.appendChild(menuItemElem);
    });
    main.textContent = "";
    main.appendChild(menu);
}

export default loadMenu;