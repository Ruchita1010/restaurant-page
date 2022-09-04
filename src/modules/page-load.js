import "../styles/nav.css";
import loadHome from "./home";

const createNavbar = () => {
    const navElem = document.createElement("nav");
    navElem.innerHTML = `
        <div class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <ul class="nav-links">
            <li class="list-item"><a href="#">Home</a></li>
            <li class="list-item"><a href="#">Menu</a></li>
            <li class="list-item"><a href="#">About</a></li>
        </ul>
    `;
    const hamburger = navElem.firstElementChild;
    const navLinks = hamburger.nextElementSibling;
    const listItem = navLinks.children;
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("click");
        Array.from(listItem).forEach(item => {
            item.classList.toggle("fade");
        });
    });
    return navElem;
}

const createMain = () => {
    const main = document.createElement("main");
    return main;
}

const pageLoad = () => {
    const content = document.querySelector(".content");
    const navbar = createNavbar();
    const main = createMain();
    content.appendChild(navbar);
    content.appendChild(main);
    loadHome();
}

export default pageLoad;