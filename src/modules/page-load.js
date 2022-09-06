import "../styles/nav.css";
import "../styles/footer.css";
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
            <img src="../src/assets/logo.png" class="logo"/>
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

const createFooter = () => {
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <p>Made with ♥ by Ruchita</p>
        <ul class="social-links">
            <li class="social-link"><a href="https://github.com/Ruchita1010"><i class="icon fa-brands fa-github"></i></a></li>
            <li class="social-link"><a href="https://twitter.com/_ruchita1010"><i class="icon fa-brands fa-twitter"></i></a></li>
            <li class="social-link"><a href="#"><i class="icon fa-brands fa-instagram"></i></a></li>
        </ul>
    `;
    return footer;
}

const pageLoad = () => {
    const content = document.querySelector(".content");
    const navbar = createNavbar();
    const main = createMain();
    const footer = createFooter();
    content.appendChild(navbar);
    content.appendChild(main);
    content.appendChild(footer);
    loadHome();
}

export default pageLoad;